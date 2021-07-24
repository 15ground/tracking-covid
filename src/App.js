import CountrySelector from "./componets/CountrySelector";
import Highlights from "./componets/Highlights";
import Summary from "./componets/Summary";
import { useEffect, useState } from "react";
import { getCountries } from "./api";
import { getReportByCountry } from "./api";
import { sortBy } from "lodash";
import { Container, Typography } from "@material-ui/core";
import moment from "moment";
import "moment/locale/vi";
import "@fontsource/roboto";

moment.locale("vi");

function App() {
  const [countries, setCountries] = useState([]);

  const [selectedCountryID, setSelectedCountryID] = useState("");

  const [report, setReport] = useState([]);
  // Get data Countries vao select box
  useEffect(() => {
    getCountries().then((res) => {
      setCountries(sortBy(res.data, "Country"));
      setSelectedCountryID("vn");
    });
  }, []);

  const handleOnchange = (e) => {
    setSelectedCountryID(e.target.value);
  };

  // Get report theo country
  useEffect(() => {
    if (selectedCountryID) {
      const { Slug } = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryID
      );
      // When country change we'll call api
      getReportByCountry(Slug).then((res) => {
        // Remove last item vi ngay chua ket thuc nen data k the chinh xac 100%
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [countries, selectedCountryID]);
  return (
    <Container style={{ marginTop: "25px" }}>
      <Typography variant="h2" component="h2">
        Số liệu COVID-19
      </Typography>
      <Typography>{moment().format("LLL")}</Typography>
      <CountrySelector
        countries={countries}
        handleOnChange={handleOnchange}
        value={selectedCountryID}
      />
      <Highlights report={report} />
      <Summary report={report} selectedCountryID={selectedCountryID} />
    </Container>
  );
}

export default App;
