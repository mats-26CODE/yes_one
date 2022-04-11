import React from "react";
import { Grid } from "@material-ui/core";
import _ from "lodash";

const ClientSection = ({ clientData }) => {
  const renderClients = () => {
    if (!_.isEmpty(clientData)) {
      const clientsData = clientData.clients;
      const _clients = _.map(clientsData, (client) => client);
      return (
        <Grid container>
          {_clients.map((client, index) => {
            return (
              <Grid item xs={12} sm={12} md={12} lg={4} xl={4} key={index}>
                <div className={"client_box"}>
                  <img
                    src={client.clientLogo}
                    alt={`${client.clientName} logo`}
                  />
                  <p>{client.clientName}</p>
                </div>
              </Grid>
            );
          })}
        </Grid>
      );
    } else {
      return (
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={"careers_intro"}>
              <h5>Client's coming your way very soon...</h5>
            </div>
          </Grid>
        </Grid>
      );
    }
  };

  return <div>{renderClients()}</div>;
};

export default ClientSection;
