import React, { Component } from 'react';
import shuffle from 'shuffle-array';
import Card from './Card';
import Navbar1 from './Navbar1';
import LevelSelector from './LevelSelector';

import Container from 'react-bootstrap/Container'

import Row from 'react-bootstrap/Row'
const CardState = {
  Hiding: 0,
  Visible: 1,
  Matched: 2,
};
export class MemoryGame extends Component {
  constructor(props) {
    super(props);


    this.state = {

      cards: this.makeCards(),
      noClick: false,
      level: "medium",
      clicks: 0,
      cardsMatched: 0,
      previousBest: {
        easy: "-",
        medium: "-",
        hard: "-",
        expert: "-"
      }


    };

    this.clickHandler = this.clickHandler.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);

  }
  makeCards(level = "medium") {
    let colors = [
      'red',
      'yellow',
      'pink',
      'purple',
      'blue',
      'orange',
      'green',
      'navy',
      'brown',
      'blueviolet',
      'magenta',
      'mediumaquamarine',
      'greenyellow',
      'gold',
      'skyblue',
      'olive',
    ];
    let numColors = 8;

    if (level === 'hard' || level === 'expert') {
      numColors = 16;
    }
    if (level === "medium" || level === "expert") {
      this.visibleTime = 500
    }
    var Cards = [];
    for (let index = 0; index < numColors; index++) {
      let element1 = {
        id: 2 * index,
        cardState: CardState.Hiding,
        color: colors[index],
      };
      let element2 = {
        id: 2 * index + 1,
        cardState: CardState.Hiding,
        color: colors[index],
      };
      Cards.push(element1, element2);
    }
    Cards = shuffle(Cards);
    return Cards
  }

  clickHandler(id) {
    if (this.state.noClick === false) {
      this.setState(prevState => {
        return { clicks: prevState.clicks + 1 }
      })
    }
    const MapCardState = (cards, idsToChange, newCardState) => {
      return cards.map((card) => {
        if (idsToChange.includes(card.id)) {
          return {
            ...card,
            cardState: newCardState,
          };
        }
        return card;
      });
    };
    const foundCard = this.state.cards.find((card) => card.id === id);

    if (this.state.noClick || foundCard.cardState !== CardState.Hiding) {
      return;
    }

    let noClick = false;
    let cards = MapCardState(this.state.cards, [id], CardState.Visible);

    const showingCards = cards.filter(
      (card) => card.cardState === CardState.Visible
    );

    const ids = showingCards.map((card) => card.id);

    if (
      showingCards.length === 2 &&
      showingCards[0].color === showingCards[1].color
    ) {
      cards = MapCardState(cards, ids, CardState.Matched);
      this.setState(prevState => {
        return { cardsMatched: prevState.cardsMatched + 2 }
      }, () => {
        setTimeout(() => {
          if (this.state.cardsMatched === this.state.cards.length) {
            let l = this.state.level;
            let click = this.state.clicks
            if (this.state.previousBest[l] === "-" || this.state.previousBest[l] >= click) {
              var previousbestobj = this.state.previousBest
              previousbestobj[l] = click
              this.setState({ previousBest: previousbestobj })
            }

            this.handleNewGame();
          }
        }, 1200)
      })


    } else if (showingCards.length === 2) {
      let hidingCards = MapCardState(cards, ids, CardState.Hiding);
      noClick = true;
      this.setState({ cards, noClick }, () => {

        setTimeout(
          () => this.setState({ cards: hidingCards, noClick: false }),

          this.state.level === "medium" || this.state.level === "expert" ? 400 : 1000
        );

      });
      return;
    }
    this.setState({ cards: cards, noClick });
  }

  handleNewGame() {
    let cards = this.state.cards.map((card) => ({
      ...card,
      cardState: CardState.Hiding,
    }));
    cards = shuffle(cards);
    this.setState({ cards: cards, clicks: 0, cardsMatched: 0 });
  }
  changeLevel = (value) => {
    let newState = {
      cards: this.makeCards(value), noClick: false, level: value, clicks: 0,
      cardsMatched: 0,
    }

    this.setState(newState);
  }
  render() {
    const cards = this.state.cards.map((card, id, arr) => (
      <Card
        numCards={arr.length}
        key={card.id}
        Visible={card.cardState !== CardState.Hiding}
        backgroundColor={card.color}
        onClick={() => this.clickHandler(card.id)}
      />
    ));
    return (
      <div>
        <Navbar1 onNewGame={this.handleNewGame} />
        <p> Number of Clicks:  <strong> {this.state.clicks}</strong>
          <br></br>
          <strong>Previous best {this.state.previousBest[this.state.level]}</strong></p>

        <LevelSelector changeLevel={this.changeLevel.bind(this)} />
        <Container>
          <Row>

            {cards}

          </Row>
        </Container>
      </div>
    );
  }
}

export default MemoryGame;
