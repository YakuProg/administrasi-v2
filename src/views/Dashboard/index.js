import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import { getDataDashboard } from "../../config/Api/dashboard";
import Divider from "@material-ui/core/Divider";
import { Line } from "react-chartjs-2";
// import AccessTime from "@material-ui/icons/AccessTime";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";

export default function Dashboard() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [dataResponse, setDataResponse] = useState({
    dataRekap: null,
    isLoading: true,
  });

  // useEffect(() => {
  //   async function fetchData() {
  //     const { statusHeader, data } = await getDataDashboard({
  //       params: {
  //         tahun: 2021,
  //       },
  //     });

  //     if (statusHeader === 200) {
  //       setDataResponse({
  //         dataRekap: data,
  //         isLoading: false,
  //       });
  //     }
  //   }

  //   dataResponse.isLoading && fetchData();
  // }, [dataResponse]);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card chart>
            <CardBody>
              <h4 className={classes.cardTitleBlack}>Dashboard</h4>
              <Divider />
            </CardBody>
            <CardHeader>
              {dataResponse.dataRekap && (
                <Line
                  data={{
                    labels: dataResponse.dataRekap.labels,
                    datasets: [
                      {
                        label: "# chart every month",
                        data: dataResponse.dataRekap.data,
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          // 'rgba(54, 162, 235, 0.2)',
                          // 'rgba(255, 206, 86, 0.2)',
                          // 'rgba(75, 192, 192, 0.2)',
                          // 'rgba(153, 102, 255, 0.2)',
                          // 'rgba(255, 159, 64, 0.2)'
                        ],
                        // borderColor: [
                        //   'rgba(255, 99, 132, 1)',
                        //   'rgba(54, 162, 235, 1)',
                        //   'rgba(255, 206, 86, 1)',
                        //   'rgba(75, 192, 192, 1)',
                        //   'rgba(153, 102, 255, 1)',
                        //   'rgba(255, 159, 64, 1)'
                        // ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  height={400}
                  width={600}
                  options={{
                    maintainAspectRatio: false,
                  }}
                />
              )}
            </CardHeader>
            <CardFooter chart>
              <div className={classes.stats}>
                {/* <AccessTime /> campaign sent 2 days ago */}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

const styles = () => ({
  cardTitleBlack: {
    color: "#000000",
    marginTop: "30px",
    minHeight: "auto",
    fontWeight: "500",
    fontSize: "23px",
    fontFamily: "'Roboto'",
    // fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "20px",
    textDecoration: "none",
  },
});
