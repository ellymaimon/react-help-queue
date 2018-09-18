import React, {Component} from "react";
import TicketList from "./TicketList";
import Header from "./Header";
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import Admin from './Admin';
import { Switch, Route } from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: {},
      selectedTicket: null
    };
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
     this.updateTicketElapsedWaitTime(),
     60000
    )
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    let newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    Object.keys(newMasterTicketList).forEach(ticketId => {
      newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    });
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleChangingSelectedTicket(ticketId) {
    this.setState({selectedTicket: ticketId});
  }

  render(){
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/'
                 render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket'
                 render={()=><NewTicketControl />} />
          <Route path="/admin" render={(props) => <Admin ticketList={this.state.masterTicketList}
                                                         currentRouterPath={props.location.pathname}
                                                         onTicketSelection = {this.handleChangingSelectedTicket}
                                                         selectedTicket={this.state.selectedTicket} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;