import { Wrapper, Top, Info, Button, Widget } from "./Home.style";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "./components/featuredInfo/FeaturedInfo";
import WidgetSm from "./components/widgetSm/WidgetSm";
import WidgetLg from "./components/widgetLg/WidgetLg";
import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../requestMethods/requestMethods";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [userStats, setUserStats] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const accessToken = useSelector(
    (state) => state.user.currentUser.accessToken
  );
  const months = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getUserStats = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/users/stats`, {
          headers: {
            token: `Bearer ${accessToken}`,
          },
        });
        const data = [];
        res.data.map(({ _id, total }) =>
          data.push({ name: months[_id - 1], "Active User": total })
        );
        setUserStats(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    getUserStats();
  }, [months]);

  return (
    <Wrapper>
      <Top>
        <Info>Home</Info>
        <Link to="/newProduct">
          <Button>Create</Button>
        </Link>
      </Top>
      <FeaturedInfo />
      <Chart
        title="User Analytics"
        isLoading={isLoading}
        error={error}
        data={userStats}
        dataKey="Active User"
        grid
        margin="apply"
      />
      <Widget>
        <WidgetSm />
        <WidgetLg />
      </Widget>
    </Wrapper>
  );
}

export default Home;
