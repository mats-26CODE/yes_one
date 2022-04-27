import React from "react";
import _ from "lodash";
import { Grid } from "@material-ui/core";
import { IoCheckmarkDone } from "react-icons/io5";

const SectionCards = ({ cards }) => {
  const renderCards = () => {
    if (!_.isEmpty(cards)) {
      const cardsData = cards.homeCards;
      const _cards = _.map(cardsData, (card) => card);
      return (
        <Grid container>
          {_cards.map((card, index) => {
            const getCards = () => {
              if (index === 0) {
                return (
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4} key={index}>
                    <div className={"home_card_one"}>
                      <div>
                        <h4>{card.cardHeader}</h4>
                      </div>
                      <div>
                        {card.cardFeatureOne ? (
                          <div>
                            <h5>{card.cardFeatureOne}</h5>
                            <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                          </div>
                        ) : null}
                        {card.cardFeatureTwo ? (
                          <div>
                            <h5>{card.cardFeatureTwo}</h5>
                            <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                          </div>
                        ) : null}
                        {card.cardFeatureThree ? (
                          <div>
                            <h5>{card.cardFeatureThree}</h5>
                            <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                          </div>
                        ) : null}
                        {card.cardFeatureFour ? (
                          <div>
                            <h5>{card.cardFeatureFour}</h5>
                            <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </Grid>
                );
              } else if (index === 1) {
                return (
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4} key={index}>
                    <div className={"home_card_two"}>
                      <div>
                        {card.cardFeatureOne ? (
                          <div>
                            <h5>{card.cardFeatureOne}</h5>
                            <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                          </div>
                        ) : null}
                        {card.cardFeatureTwo ? (
                          <div>
                            <h5>{card.cardFeatureTwo}</h5>
                            <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                          </div>
                        ) : null}
                        {card.cardFeatureThree ? (
                          <div>
                            <h5>{card.cardFeatureThree}</h5>
                            <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                          </div>
                        ) : null}
                        {card.cardFeatureFour ? (
                          <div>
                            <h5>{card.cardFeatureFour}</h5>
                            <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <h4>{card.cardHeader}</h4>
                      </div>
                    </div>
                  </Grid>
                );
              } else if (index === 2) {
                return (
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4} key={index}>
                    <div className={"home_card_one"}>
                      <div>
                        <h4>{card.cardHeader}</h4>
                      </div>
                      <div>
                        {card.cardFeatureOne ? (
                          <div>
                            <h5>{card.cardFeatureOne}</h5>
                            <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                          </div>
                        ) : null}
                        {card.cardFeatureTwo ? (
                          <div>
                            <h5>{card.cardFeatureTwo}</h5>
                            <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                          </div>
                        ) : null}
                        {card.cardFeatureThree ? (
                          <div>
                            <h5>{card.cardFeatureThree}</h5>
                            <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                          </div>
                        ) : null}
                        {card.cardFeatureFour ? (
                          <div>
                            <h5>{card.cardFeatureFour}</h5>
                            <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </Grid>
                );
              }
            };

            return <>{getCards()}</>;
          })}
        </Grid>
      );
    } else {
      return (
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className={"home_card_one"}>
              <div>
                <h4>Operable</h4>
              </div>
              <div>
                <div>
                  <h5>Usability</h5>
                  <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                </div>
                <div>
                  <h5>Efficiency</h5>
                  <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                </div>
                <div>
                  <h5>Correctness</h5>
                  <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                </div>
                <div>
                  <h5>Functionality</h5>
                  <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className={"home_card_two"}>
              <div>
                <div>
                  <h5>Portability</h5>
                  <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                </div>
                <div>
                  <h5>Adaptability</h5>
                  <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                </div>
                <div>
                  <h5>Reusability</h5>
                  <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                </div>
              </div>
              <div>
                <h4>Transitional</h4>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className={"home_card_one"}>
              <div>
                <h4>Maintanable</h4>
              </div>
              <div>
                <div>
                  <h5>Maintanability</h5>
                  <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                </div>
                <div>
                  <h5>Flexibility</h5>
                  <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                </div>
                <div>
                  <h5>Scalability</h5>
                  <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                </div>
                <div>
                  <h5>Modularity</h5>
                  <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      );
    }
  };
  return <div>{renderCards()}</div>;
};

export default SectionCards;
