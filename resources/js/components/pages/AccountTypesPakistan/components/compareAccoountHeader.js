import React, { Component } from "react";

export default class compareAccoountHeader extends Component {
  constructor() {
    super();
    // state
    this.state = {
      active: true,
    };
  }

  // handle active fun
  handleActiveFun  ()  {
    this.setState({
      active: !this.state.active,
    });
  };

  //   renderMain
  render() {
    const { active, handleActiveFun } = this.props;
    return (
      <div className="col-12">
        <div className=" row compareAccountTopHeader">
          <div
            className={
              active === true
                ? " col-12 standardAccountDiv standardAccountActive"
                : " col-12 standardAccountDiv"
            }
            onClick={() => handleActiveFun()}
          >
            <h3 className="compareAccountTitle mt-2 mt-sm-3">
              Trading Accounts
            </h3>
          </div>
          {/* <div
            className={
              active === false
                ? " col-6 standardAccountDiv standardAccountActive"
                : " col-6 standardAccountDiv"
            }
            onClick={() => handleActiveFun()}
          >
            <h3 className="compareAccountTitle mt-2 mt-sm-3">Trader Accounts</h3>
          </div> */}
        </div>
      </div>
    );
  }
}
