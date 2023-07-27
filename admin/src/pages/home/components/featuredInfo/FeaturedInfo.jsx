import {
  FeaturedWrapper,
  Featured,
  Slider,
  FeaturedItem,
  FeaturedTitle,
  FeaturedMoneyContainer,
  FeaturedMoney,
  FeaturedMoneyRate,
  FeaturedSub,
  IconButton,
} from "./FeaturedInfo.style";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../../../requestMethods/requestMethods";
import axios from "axios";
import { useSelector } from "react-redux";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const accessToken = useSelector(
    (state) => state.user.currentUser.accessToken
  );

  const handleSlideIndex = (dir) => {
    if (dir === "next") {
      setSlideIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : prevIndex));
      return;
    }

    setSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/orders/income`, {
          headers: {
            token: `Bearer ${accessToken}`,
          },
        });
        setIncome(res.data);
        setPercentage((res.data[1].total * 100) / res.data[0].total - 100);
      } catch (err) {}
    };

    getIncome();
  }, []);

  return (
    <FeaturedWrapper>
      <IconButton onClick={() => handleSlideIndex("prev")}>
        <ArrowBackIosOutlinedIcon />
      </IconButton>
      <IconButton dir="right" onClick={() => handleSlideIndex("next")}>
        <ArrowForwardIosOutlinedIcon />
      </IconButton>
      <Featured>
        <Slider slideindex={slideIndex}>
          <FeaturedItem>
            <FeaturedTitle>Revanue</FeaturedTitle>
            <FeaturedMoneyContainer>
              <FeaturedMoney>${income[0]?.total}</FeaturedMoney>
              <FeaturedMoneyRate>
                %{Math.round(percentage)}
                {percentage < 0 ? (
                  <ArrowDownward style={{ fontSize: "14px", color: "red" }} />
                ) : (
                  <ArrowUpward style={{ fontSize: "14px", color: "green" }} />
                )}
              </FeaturedMoneyRate>
            </FeaturedMoneyContainer>
            <FeaturedSub>Compare to last month</FeaturedSub>
          </FeaturedItem>
          <FeaturedItem>
            <FeaturedTitle>Sales</FeaturedTitle>
            <FeaturedMoneyContainer>
              <FeaturedMoney>${income[0]?.total}</FeaturedMoney>
              <FeaturedMoneyRate>
                %{Math.round(percentage)}
                {percentage < 0 ? (
                  <ArrowDownward style={{ fontSize: "14px", color: "red" }} />
                ) : (
                  <ArrowUpward style={{ fontSize: "14px", color: "green" }} />
                )}
              </FeaturedMoneyRate>
            </FeaturedMoneyContainer>
            <FeaturedSub>Compare to last month</FeaturedSub>
          </FeaturedItem>
          <FeaturedItem>
            <FeaturedTitle>Cost</FeaturedTitle>
            <FeaturedMoneyContainer>
              <FeaturedMoney>${income[0]?.total}</FeaturedMoney>
              <FeaturedMoneyRate>
                %{Math.round(percentage)}
                {percentage < 0 ? (
                  <ArrowDownward style={{ fontSize: "14px", color: "red" }} />
                ) : (
                  <ArrowUpward style={{ fontSize: "14px", color: "green" }} />
                )}
              </FeaturedMoneyRate>
            </FeaturedMoneyContainer>
            <FeaturedSub>Compare to last month</FeaturedSub>
          </FeaturedItem>
        </Slider>
      </Featured>
    </FeaturedWrapper>
  );
}

export default FeaturedInfo;
