import React from "react";
import _ from "lodash";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

const Traits = ({
  secOneTraits,
  secTwoTraits,
  secThreeTraits,
  secFourTraits,

  secOne,
  secTwo,
  secThree,
  secFour,
}) => {
  const renderSectionTraits = () => {
    if (secOne) {
      if (!_.isEmpty(secOneTraits)) {
        const traitsData = secOneTraits.devSectionOneTraits;
        const _traits = _.map(traitsData, (trait) => trait);
        return (
          <div>
            <h5>Our tech stack</h5>
            {_traits.map((trait, index) => {
              return (
                <div key={index}>
                  <div className="dev_trait_box">
                    <IoChevronForwardCircleOutline className="traitIcon" />
                    <p>{trait.sectionOneTrait} </p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      }
    } else if (secTwo) {
      if (!_.isEmpty(secTwoTraits)) {
        const traitsData = secTwoTraits.devSectionTwoTraits;
        const _traits = _.map(traitsData, (trait) => trait);
        return (
          <div>
            <h5>Our design ticks</h5>
            {_traits.map((trait, index) => {
              return (
                <div key={index}>
                  <div className="dev_trait_box">
                    <IoChevronForwardCircleOutline className="traitIcon" />
                    <p>{trait.sectionTwoTrait} </p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      }
    } else if (secThree) {
      if (!_.isEmpty(secThreeTraits)) {
        const traitsData = secThreeTraits.devSectionThreeTraits;
        const _traits = _.map(traitsData, (trait) => trait);
        return (
          <div>
            <h5>Apps we develop</h5>
            {_traits.map((trait, index) => {
              return (
                <div key={index}>
                  <div className="dev_trait_box">
                    <IoChevronForwardCircleOutline className="traitIcon" />
                    <p>{trait.sectionThreeTrait} </p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      }
    } else if (secFour) {
      if (!_.isEmpty(secFourTraits)) {
        const traitsData = secFourTraits.devSectionFourTraits;
        const _traits = _.map(traitsData, (trait) => trait);
        return (
          <div>
            <h5>Our web apps ticks</h5>
            {_traits.map((trait, index) => {
              return (
                <div key={index}>
                  <div className="dev_trait_box">
                    <IoChevronForwardCircleOutline className="traitIcon" />
                    <p>{trait.sectionFourTrait} </p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      }
    }
  };

  return <div>{renderSectionTraits()}</div>;
};

export default Traits;
