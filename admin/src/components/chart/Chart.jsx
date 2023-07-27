import Loader from "../loader/Loader";
import { Wrapper, Title, Error } from "./Chart.style";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Chart({ title, isLoading, error, data, dataKey, grid, margin }) {
  return (
    <Wrapper margin={margin}>
      {isLoading && <Loader />}
      <Title>{title}</Title>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bc" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bc" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
      {error && <Error>Something went wrong, Can't fetch data.</Error>}
    </Wrapper>
  );
}

export default Chart;
