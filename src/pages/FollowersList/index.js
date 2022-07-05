import React from "react";

import { useNavigate } from "react-router-dom";
import { getFollowers } from "service/api";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
  Stack,
  Line,
  Row,
  Image,
  Column,
  Text,
  List,
  Button,
  Input,
} from "components";

const FollowersListPage = () => {
  const [apiData, setapiData] = React.useState();
  React.useEffect(() => {
    callApi();
  }, []);
  const navigate = useNavigate();

  function callApi() {
    const req = {};
    getFollowers(req)
      .then((res) => {
        setapiData(res);

        toast.success("Ravi, data is here!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Not working, Nidhi!");
      });
  }
  function handleNavigate5() {
    navigate("/followinglist");
  }
  function handleNavigate6() {
    navigate("/profilepage");
  }
  function handleNavigate7() {
    navigate("/");
  }
  function handleNavigate8() {
    navigate("/");
  }
  function handleBackNavigation2() {
    navigate(-1);
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Stack
        className="bg-white_A700 font-helveticaneue h-[1080px] 2xl:h-[1081px] 3xl:h-[1297px] lg:h-[840px] xl:h-[961px] mx-[auto] w-[100%]"
        compId="15:775"
        comWidth={1440}
        comHeight={1080}
        compLeft={0}
        compRight={0}
        compType="Stack"
      >
        <Line
          className="absolute bg-black_900_14 bottom-[0] h-[1px] left-[22%] w-[48%]"
          compId="15:778"
          comWidth={692}
          comHeight={1}
          compLeft={320.5}
          compRight={0}
          compType="Line"
        />
        <Stack
          className="absolute h-[1080px] 2xl:h-[1081px] 3xl:h-[1297px] lg:h-[840px] xl:h-[961px] left-[25%] w-[43%]"
          compId="151"
          comWidth={613}
          comHeight={1080}
          compLeft={361}
          compRight={0}
          compType="Stack"
        >
          <Row
            className="absolute items-start justify-center left-[6%] pr-[1px] top-[3%] w-[29%]"
            compId="15:785"
            comWidth={176}
            comHeight={56}
            compLeft={34}
            compRight={0}
            compType="Row"
          >
            <Image
              src={"images/img_vector_45.png"}
              className="common-pointer lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mb-[25px] xl:mb-[29px] mb-[33px] 3xl:mb-[39px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
              compId="I15:786;6:13237"
              comWidth={16}
              comHeight={16}
              compLeft={0}
              compRight={0}
              compType="Image"
              onClick={handleBackNavigation2}
              alt="Vector"
            />
            <Column
              className="items-start justify-start lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] w-[75%]"
              compId="15:787"
              comWidth={131}
              comHeight={56}
              compLeft={28}
              compRight={0}
              compType="Column"
            >
              <Column
                className="font-helveticaneue items-center w-[100%]"
                compId="158"
                comWidth={131}
                comHeight={28}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]"
                  compId="15:788"
                  comWidth={131}
                  comHeight={28}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Jerome Bell
                </Text>
              </Column>
              <Text
                className="font-helveticaneue1 font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]"
                compId="15:789"
                comWidth={95}
                comHeight={19}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                1,027 Tweets
              </Text>
            </Column>
          </Row>
          <Stack
            className="absolute h-[1080px] 2xl:h-[1081px] 3xl:h-[1297px] lg:h-[840px] xl:h-[961px] inset-[0] w-[100%]"
            compId="138"
            comWidth={613}
            comHeight={1080}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Line
              className="absolute bg-bluegray_50 h-[1px] right-[0] rotate-[-90deg] w-[1px]"
              compId="15:791"
              comWidth={1}
              comHeight={1080}
              compLeft={0}
              compRight={0}
              compType="Line"
            />
            <Column
              className="absolute items-center justify-start top-[10%] w-[100%]"
              compId="15:817"
              comWidth={613}
              comHeight={36}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-between ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] mr-[101px] 3xl:mr-[121px] lg:mr-[78px] xl:mr-[89px] w-[67%]"
                compId="15:818"
                comWidth={412}
                comHeight={21}
                compLeft={100}
                compRight={101}
                compType="Row"
              >
                <Text
                  className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]"
                  compId="15:819"
                  comWidth={84}
                  comHeight={21}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Followers
                </Text>
                <Text
                  className="common-pointer font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]"
                  compId="15:820"
                  comWidth={83}
                  comHeight={21}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                  onClick={handleNavigate5}
                >
                  Following
                </Text>
              </Row>
              <Image
                src={"images/img_group48_1.png"}
                className="h-[3px] 3xl:h-[4px] 2xl:h-[4px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] object-cover w-[100%]"
                compId="15:821"
                comWidth={613}
                comHeight={3}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Group48"
              />
            </Column>
            <List
              className="absolute bottom-[8%] gap-[0] inset-x-[0] min-h-[auto] mx-[auto] w-[92%]"
              compId="15:824"
              comWidth={564}
              comHeight={820}
              compLeft={0}
              compRight={0}
              compType="List"
              orientation="vertical"
            >
              {apiData?.data?.map((apiDataEle) => {
                return (
                  <Row
                    className="items-start justify-start xl:mr-[4px] lg:mr-[4px] mr-[5.15px] 2xl:mr-[5px] 3xl:mr-[6px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[99%]"
                    compId="15:825"
                    comWidth={558.85}
                    comHeight={50}
                    compLeft={0}
                    compRight={5.15}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_profilepicture_24.png"}
                      className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                      compId="15:831"
                      comWidth={50}
                      comHeight={50}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="ProfilePicture"
                    />
                    <Column
                      className="items-start justify-start lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[17%]"
                      compId="15:827"
                      comWidth={97}
                      comHeight={42}
                      compLeft={12}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="font-helveticaneue items-center w-[100%]"
                        compId="159"
                        comWidth={97}
                        comHeight={19}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-bold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]"
                          compId="15:828"
                          comWidth={97}
                          comHeight={19}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Alex D’souza
                        </Text>
                      </Column>
                      <Text
                        className="font-helveticaneue1 font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]"
                        compId="15:829"
                        comWidth={87}
                        comHeight={19}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        @alexd1423
                      </Text>
                    </Column>
                    <Button
                      className="bg-gray_900 font-bold lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:ml-[221px] xl:ml-[253px] ml-[285px] 3xl:ml-[342px] xl:py-[4px] lg:py-[4px] py-[5.5px] 2xl:py-[5px] 3xl:py-[6px] rounded-radius15 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[14%]"
                      compId="15:832"
                      comWidth={80}
                      comHeight={30}
                      compLeft={285}
                      compRight={0}
                      compType="Button"
                    >
                      Follow
                    </Button>
                    <Image
                      src={"images/img_group544_22.png"}
                      className="h-[1.73px] 2xl:h-[2px] xl:h-[2px] lg:h-[2px] 3xl:h-[3px] lg:mb-[25px] xl:mb-[29px] mb-[33.27px] 2xl:mb-[33px] 3xl:mb-[39px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] object-contain w-[2%]"
                      compId="15:836"
                      comWidth={13.85}
                      comHeight={1.73}
                      compLeft={21}
                      compRight={0}
                      compType="Image"
                      alt="Group544"
                    />
                  </Row>
                );
              })}
            </List>
          </Stack>
        </Stack>
        <Row
          className="absolute items-center justify-center left-[6%] w-[19%]"
          compId="144"
          comWidth={275}
          comHeight={1080}
          compLeft={86}
          compRight={0}
          compType="Row"
        >
          <Column
            className="lg:my-[18px] xl:my-[21px] my-[24px] 3xl:my-[28px] lg:pt-[11px] xl:pt-[12px] pt-[14.44px] 2xl:pt-[14px] 3xl:pt-[17px] w-[93%]"
            compId="15:792"
            comWidth={255}
            comHeight={1032}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="items-start justify-start ml-[11.12px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[65%]"
              compId="152"
              comWidth={164.88}
              comHeight={502}
              compLeft={11.12}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_vector_46.png"}
                className="common-pointer lg:h-[18px] xl:h-[21px] h-[23.07px] 2xl:h-[24px] 3xl:h-[28px] ml-[1px] object-contain w-[17%]"
                compId="I15:795;3:143"
                comWidth={28.38}
                comHeight={23.07}
                compLeft={0.05}
                compRight={0}
                compType="Image"
                onClick={handleNavigate8}
                alt="Vector"
              />
              <Row
                className="common-pointer items-start justify-start lg:mt-[25px] xl:mt-[29px] mt-[32.71px] 2xl:mt-[32px] 3xl:mt-[39px] w-[62%]"
                compId="15:797"
                comWidth={102.88}
                comHeight={25.31}
                compLeft={0}
                compRight={0}
                compType="Row"
                onClick={handleNavigate7}
              >
                <Image
                  src={"images/img_vector_47.png"}
                  className="lg:h-[20px] xl:h-[23px] h-[25.31px] 2xl:h-[26px] 3xl:h-[31px] object-contain w-[27%]"
                  compId="I15:797;3:292;3:97"
                  comWidth={27.75}
                  comHeight={25.31}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-medium mb-[1px] lg:ml-[16px] xl:ml-[18px] ml-[21.13px] 2xl:ml-[21px] 3xl:ml-[25px] mt-[1.78px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]"
                  compId="I15:797;3:293"
                  comWidth={54}
                  comHeight={23}
                  compLeft={21.13}
                  compRight={0}
                  compType="Text"
                >
                  Home
                </Text>
              </Row>
              <Row
                className="items-start justify-start ml-[1.69px] 2xl:ml-[1px] xl:ml-[1px] lg:ml-[1px] 3xl:ml-[2px] lg:mt-[27px] xl:mt-[31px] mt-[35.28px] 2xl:mt-[35px] 3xl:mt-[42px] w-[72%]"
                compId="15:798"
                comWidth={118.19}
                comHeight={24.37}
                compLeft={1.69}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_vector_48.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24.37px] 2xl:h-[25px] 3xl:h-[30px] object-contain w-[21%]"
                  compId="I15:798;4:773;1:11"
                  comWidth={24.38}
                  comHeight={24.37}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-medium lg:ml-[17px] xl:ml-[20px] ml-[22.81px] 2xl:ml-[22px] 3xl:ml-[27px] my-[1px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]"
                  compId="I15:798;4:774"
                  comWidth={71}
                  comHeight={23}
                  compLeft={22.81}
                  compRight={0}
                  compType="Text"
                >
                  Explore
                </Text>
              </Row>
              <Column
                className="items-center lg:mt-[27px] xl:mt-[31px] mt-[35.23px] 2xl:mt-[35px] 3xl:mt-[42px] pl-[1px] w-[100%]"
                compId="170"
                comWidth={164.88}
                comHeight={25.06}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-start justify-start w-[100%]"
                  compId="15:799"
                  comWidth={163.5}
                  comHeight={25.06}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_vector_49.png"}
                    className="lg:h-[20px] xl:h-[23px] h-[25.06px] 2xl:h-[26px] 3xl:h-[31px] object-contain w-[15%]"
                    compId="I15:799;4:773;1:14"
                    comWidth={25}
                    comHeight={25.06}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Text
                    className="font-medium lg:ml-[17px] xl:ml-[20px] ml-[22.5px] 2xl:ml-[22px] 3xl:ml-[27px] my-[1px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]"
                    compId="I15:799;4:774"
                    comWidth={116}
                    comHeight={23}
                    compLeft={22.5}
                    compRight={0}
                    compType="Text"
                  >
                    Notifications
                  </Text>
                </Row>
              </Column>
              <Row
                className="items-center justify-start ml-[1px] lg:mt-[28px] xl:mt-[32px] mt-[36.3px] 2xl:mt-[36px] 3xl:mt-[43px] w-[85%]"
                compId="15:800"
                comWidth={140.5}
                comHeight={23.23}
                compLeft={1.38}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_vector_50.png"}
                  className="lg:h-[18px] xl:h-[21px] h-[22.5px] 2xl:h-[23px] 3xl:h-[28px] mb-[1px] object-contain w-[18%]"
                  compId="I15:800;4:773;1:5"
                  comWidth={25}
                  comHeight={22.5}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-medium lg:ml-[17px] xl:ml-[20px] ml-[22.5px] 2xl:ml-[22px] 3xl:ml-[27px] mt-[1px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]"
                  compId="I15:800;4:774"
                  comWidth={93}
                  comHeight={23}
                  compLeft={22.5}
                  compRight={0}
                  compType="Text"
                >
                  Messages
                </Text>
              </Row>
              <Row
                className="items-start justify-start xl:ml-[2px] lg:ml-[2px] ml-[3.07px] 3xl:ml-[3px] 2xl:ml-[3px] lg:mt-[28px] xl:mt-[32px] mt-[37px] 3xl:mt-[44px] w-[91%]"
                compId="15:801"
                comWidth={150.81}
                comHeight={25.38}
                compLeft={3.07}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_vector_51.png"}
                  className="lg:h-[20px] xl:h-[23px] h-[25.19px] 2xl:h-[26px] 3xl:h-[31px] mt-[1px] object-contain w-[14%]"
                  compId="I15:801;4:773;1:17"
                  comWidth={21.62}
                  comHeight={25.19}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-medium lg:mb-[1px] mb-[2.38px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] lg:ml-[18px] xl:ml-[21px] ml-[24.19px] 2xl:ml-[24px] 3xl:ml-[29px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]"
                  compId="I15:801;4:774"
                  comWidth={105}
                  comHeight={23}
                  compLeft={24.19}
                  compRight={0}
                  compType="Text"
                >
                  Bookmarks
                </Text>
              </Row>
              <Row
                className="items-center justify-start ml-[1px] lg:mt-[25px] xl:mt-[29px] mt-[33.12px] 2xl:mt-[33px] 3xl:mt-[39px] w-[55%]"
                compId="15:802"
                comWidth={90.5}
                comHeight={25}
                compLeft={1.38}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_group_17.png"}
                  className="lg:h-[20px] xl:h-[23px] h-[25px] 2xl:h-[26px] 3xl:h-[31px] object-contain lg:w-[19px] xl:w-[22px] w-[25px] 3xl:w-[30px]"
                  compId="I15:802;4:773;1:19"
                  comWidth={25}
                  comHeight={25}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Group"
                />
                <Text
                  className="font-medium lg:ml-[17px] xl:ml-[20px] ml-[22.5px] 2xl:ml-[22px] 3xl:ml-[27px] my-[1px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]"
                  compId="I15:802;4:774"
                  comWidth={43}
                  comHeight={23}
                  compLeft={22.5}
                  compRight={0}
                  compType="Text"
                >
                  Lists
                </Text>
              </Row>
              <Row
                className="common-pointer items-start justify-start lg:ml-[2px] ml-[3.44px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:mt-[26px] xl:mt-[30px] mt-[34.57px] 2xl:mt-[34px] 3xl:mt-[41px] w-[63%]"
                compId="15:803"
                comWidth={104.44}
                comHeight={25.42}
                compLeft={3.44}
                compRight={0}
                compType="Row"
                onClick={handleNavigate6}
              >
                <Image
                  src={"images/img_vector_52.png"}
                  className="lg:h-[20px] xl:h-[23px] h-[25.42px] 2xl:h-[26px] 3xl:h-[31px] object-contain w-[20%]"
                  compId="I15:803;4:773;1:24"
                  comWidth={20.88}
                  comHeight={25.42}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-medium mb-[1px] lg:ml-[19px] xl:ml-[21px] ml-[24.56px] 2xl:ml-[24px] 3xl:ml-[29px] mt-[1.93px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]"
                  compId="I15:803;4:774"
                  comWidth={59}
                  comHeight={23}
                  compLeft={24.56}
                  compRight={0}
                  compType="Text"
                >
                  Profile
                </Text>
              </Row>
              <Row
                className="items-center justify-start ml-[1px] lg:mt-[26px] xl:mt-[30px] mt-[34.07px] 2xl:mt-[34px] 3xl:mt-[40px] w-[58%]"
                compId="15:804"
                comWidth={96.44}
                comHeight={26.88}
                compLeft={0.44}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_group_18.png"}
                  className="lg:h-[21px] xl:h-[24px] h-[26.88px] 2xl:h-[27px] 3xl:h-[33px] object-contain lg:w-[20px] xl:w-[23px] w-[26.88px] 2xl:w-[26px] 3xl:w-[32px]"
                  compId="I15:804;4:773;1:26"
                  comWidth={26.88}
                  comHeight={26.88}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Group"
                />
                <Text
                  className="font-medium mb-[1px] lg:ml-[16px] xl:ml-[19px] ml-[21.56px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[1px] mt-[2.44px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]"
                  compId="I15:804;4:774"
                  comWidth={48}
                  comHeight={23}
                  compLeft={21.56}
                  compRight={0}
                  compType="Text"
                >
                  More
                </Text>
              </Row>
            </Column>
            <Column
              className="items-center justify-start lg:mt-[24px] xl:mt-[28px] mt-[31.56px] 2xl:mt-[31px] 3xl:mt-[37px] w-[91%]"
              compId="153"
              comWidth={232.43}
              comHeight={484}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Button
                className="bg-blue_500 font-medium lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius245 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[100%]"
                compId="15:806"
                comWidth={232}
                comHeight={49}
                compLeft={0}
                compRight={0.43}
                compType="Button"
              >
                Tweet
              </Button>
              <Row
                className="items-start justify-start lg:mt-[308px] xl:mt-[352px] mt-[396px] 3xl:mt-[475px] w-[100%]"
                compId="15:807"
                comWidth={232.43}
                comHeight={39}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_profilepicture_35.png"}
                  className="lg:h-[31px] xl:h-[35px] h-[39px] 2xl:h-[40px] 3xl:h-[47px] object-contain lg:w-[30px] xl:w-[34px] w-[39px] 3xl:w-[46px]"
                  compId="I15:811;4:973"
                  comWidth={39}
                  comHeight={39}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="ProfilePicture"
                />
                <Column
                  className="items-start justify-start mb-[1px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[53%]"
                  compId="15:808"
                  comWidth={123}
                  comHeight={38}
                  compLeft={10}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]"
                    compId="15:809"
                    comWidth={90}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Jerome Bell
                  </Text>
                  <Column
                    className="font-helveticaneue1 items-center w-[100%]"
                    compId="171"
                    comWidth={123}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]"
                      compId="15:810"
                      comWidth={123}
                      comHeight={19}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      @afonsoinocente
                    </Text>
                  </Column>
                </Column>
                <Image
                  src={"images/img_group544_33.png"}
                  className="h-[1.73px] 2xl:h-[2px] xl:h-[2px] lg:h-[2px] 3xl:h-[3px] lg:mb-[19px] xl:mb-[22px] mb-[25.14px] 2xl:mb-[25px] 3xl:mb-[30px] lg:ml-[36px] xl:ml-[41px] ml-[46.58px] 2xl:ml-[46px] 3xl:ml-[55px] xl:mt-[10px] mt-[12.13px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] object-contain w-[6%]"
                  compId="15:813"
                  comWidth={13.85}
                  comHeight={1.73}
                  compLeft={46.58}
                  compRight={0}
                  compType="Image"
                  alt="Group544"
                />
              </Row>
            </Column>
          </Column>
          <Line
            className="bg-bluegray_50 h-[1px] lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] rotate-[-90deg] w-[1px]"
            compId="15:790"
            comWidth={1}
            comHeight={1080}
            compLeft={19}
            compRight={0}
            compType="Line"
          />
        </Row>
        <Column
          className="absolute font-helveticaneue1 items-start justify-start right-[6%] top-[4%] w-[24%]"
          compId="15:992"
          comWidth={350}
          comHeight={835}
          compLeft={0}
          compRight={86}
          compType="Column"
        >
          <Column
            className="items-center w-[100%]"
            compId="172"
            comWidth={350}
            comHeight={752}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="bg-transparent border-0 font-normal p-[0] lg:pl-[13px] xl:pl-[14px] pl-[16.78px] 2xl:pl-[16px] 3xl:pl-[20px] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_600 text-bluegray_600 tracking-ls1 w-[100%]"
              WrapClassName="2xl:pl-[16px] 3xl:pl-[20px] 3xl:pr-[26px] 3xl:py-[12px] bg-bluegray_50 flex lg:mr-[1px] lg:pl-[13px] lg:pr-[17px] lg:py-[7px] mr-[2px] pl-[16.78px] pr-[22px] py-[10px] rounded-radius195 w-[99%] xl:mr-[1px] xl:pl-[14px] xl:pr-[19px] xl:py-[8px]"
              compId="15:993"
              comWidth={0}
              comHeight={39}
              compLeft={0}
              compRight={0}
              compType="SearchView"
              name="SearchBar"
              placeholder="Search Twitter"
              prefix={
                <Image
                  src={"images/img_vector_53.png"}
                  className="cursor-pointer w-[15.64px] h-[15.64px] lg:w-[12px] lg:h-[13px] xl:w-[13px] xl:h-[14px] 2xl:w-[15px] 2xl:h-[16px] 3xl:w-[18px] 3xl:h-[19px] my-[auto]"
                  compId="I15:993;4:334;4:329"
                  comWidth={15.64}
                  comHeight={15.64}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <Image
                    onClick={() => setInputvalue("")}
                    src={"images/close3.svg"}
                    className="cursor-pointer w-[15.64px] h-[15.64px] lg:w-[12px] lg:h-[13px] xl:w-[13px] xl:h-[14px] 2xl:w-[15px] 2xl:h-[16px] 3xl:w-[18px] 3xl:h-[19px] my-[auto]"
                    compId="I2:3811;309:8624"
                    comWidth={15.64}
                    comHeight={15.64}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                ) : (
                  ""
                )
              }
            ></Input>
            <Column
              className="bg-gray_50 font-helveticaneue items-start justify-start lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:pb-[11px] xl:pb-[13px] pb-[15px] 3xl:pb-[18px] pt-[11px] 3xl:pt-[13px] lg:pt-[8px] xl:pt-[9px] rounded-radius16 w-[100%]"
              compId="15:994"
              comWidth={350}
              comHeight={446}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_901 tracking-ls1 w-[auto]"
                compId="I15:994;8:642"
                comWidth={176}
                comHeight={24}
                compLeft={16}
                compRight={0}
                compType="Text"
              >
                What’s happening
              </Text>
              <Column
                className="items-center mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]"
                compId="173"
                comWidth={350}
                comHeight={386}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="items-start justify-start lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] pt-[11px] 3xl:pt-[13px] lg:pt-[8px] xl:pt-[9px] w-[100%]"
                  compId="154"
                  comWidth={350}
                  comHeight={386}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="font-helveticaneue1 items-center lg:mr-[10px] xl:mr-[12px] mr-[14px] 3xl:mr-[16px] w-[96%]"
                    compId="174"
                    comWidth={321}
                    comHeight={333}
                    compLeft={0}
                    compRight={14}
                    compType="Column"
                  >
                    <List
                      className="gap-[0] min-h-[auto] w-[100%]"
                      compId="156"
                      comWidth={321}
                      comHeight={333}
                      compLeft={0}
                      compRight={0}
                      compType="List"
                      orientation="vertical"
                    >
                      <Row
                        className="items-start justify-between my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]"
                        compId="I15:994;8:644"
                        comWidth={321}
                        comHeight={97}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="items-start justify-start w-[73%]"
                          compId="I15:994;8:644;4:359"
                          comWidth={235}
                          comHeight={97}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Row
                            className="items-center justify-start w-[57%]"
                            compId="I15:994;8:644;4:347"
                            comWidth={133}
                            comHeight={17}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Text
                              className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="I15:994;8:644;4:344"
                              comWidth={59}
                              comHeight={17}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >
                              COVID19
                            </Text>
                            <Text
                              className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="I15:994;8:644;4:345"
                              comWidth={4}
                              comHeight={17}
                              compLeft={4}
                              compRight={0}
                              compType="Text"
                            >
                              ·
                            </Text>
                            <Text
                              className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="I15:994;8:644;4:346"
                              comWidth={62}
                              comHeight={17}
                              compLeft={4}
                              compRight={0}
                              compType="Text"
                            >
                              Last night
                            </Text>
                          </Row>
                          <Column
                            className="font-helveticaneue items-center lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[100%]"
                            compId="175"
                            comWidth={235}
                            comHeight={51}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-bold leading-[normal] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_901 text-left tracking-ls1 w-[100%]"
                              compId="I15:994;8:644;4:353"
                              comWidth={235}
                              comHeight={51}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >
                              England’s Chief Medical Officer says the UK is at
                              the most dangerous time of the pandemic
                            </Text>
                          </Column>
                          <Row
                            className="font-helveticaneue1 items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[62%]"
                            compId="I15:994;8:644;4:348"
                            comWidth={146}
                            comHeight={17}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Text
                              className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="I15:994;8:644;4:349"
                              comWidth={84}
                              comHeight={17}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >
                              Trending with
                            </Text>
                            <Text
                              className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_500 w-[auto]"
                              compId="I15:994;8:644;4:352"
                              comWidth={58}
                              comHeight={17}
                              compLeft={4}
                              compRight={0}
                              compType="Text"
                            >
                              #covid19
                            </Text>
                          </Row>
                        </Column>
                        <Image
                          src={"images/img_placeholder_9.png"}
                          className="lg:h-[54px] xl:h-[62px] h-[69px] 2xl:h-[70px] 3xl:h-[83px] lg:mb-[21px] xl:mb-[24px] mb-[28px] 3xl:mb-[33px] object-contain w-[22%]"
                          compId="I15:994;8:644;4:355"
                          comWidth={71}
                          comHeight={69}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Placeholder"
                        />
                      </Row>
                      <Line
                        className="self-center w-[100%] h-[1px] bg-bluegray_50"
                        compId="I15:994;8:649"
                        comWidth={350}
                        comHeight={1}
                        compLeft={0}
                        compRight={0}
                        compType="Line"
                      />
                      <Row
                        className="items-start justify-between my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]"
                        compId="I15:994;8:646"
                        comWidth={321}
                        comHeight={97}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="items-start justify-start w-[73%]"
                          compId="I15:994;8:646;4:359"
                          comWidth={235}
                          comHeight={97}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Row
                            className="items-center justify-start w-[48%]"
                            compId="I15:994;8:646;4:347"
                            comWidth={112}
                            comHeight={17}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Text
                              className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="I15:994;8:646;4:344"
                              comWidth={56}
                              comHeight={17}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >
                              US news
                            </Text>
                            <Text
                              className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="I15:994;8:646;4:345"
                              comWidth={4}
                              comHeight={17}
                              compLeft={4}
                              compRight={0}
                              compType="Text"
                            >
                              ·
                            </Text>
                            <Text
                              className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="I15:994;8:646;4:346"
                              comWidth={44}
                              comHeight={17}
                              compLeft={4}
                              compRight={0}
                              compType="Text"
                            >
                              4h ago
                            </Text>
                          </Row>
                          <Column
                            className="font-helveticaneue items-center lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[100%]"
                            compId="176"
                            comWidth={235}
                            comHeight={51}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-bold leading-[normal] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_901 text-left tracking-ls1 w-[100%]"
                              compId="I15:994;8:646;4:353"
                              comWidth={235}
                              comHeight={51}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >
                              Parler may go offline following suspensions by
                              Amazon, Apple and Google
                            </Text>
                          </Column>
                          <Row
                            className="font-helveticaneue1 items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[57%]"
                            compId="I15:994;8:646;4:348"
                            comWidth={133}
                            comHeight={17}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Text
                              className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="I15:994;8:646;4:349"
                              comWidth={84}
                              comHeight={17}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >
                              Trending with
                            </Text>
                            <Text
                              className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_500 w-[auto]"
                              compId="I15:994;8:646;4:352"
                              comWidth={45}
                              comHeight={17}
                              compLeft={4}
                              compRight={0}
                              compType="Text"
                            >
                              #trump
                            </Text>
                          </Row>
                        </Column>
                        <Image
                          src={"images/img_placeholder_10.png"}
                          className="lg:h-[54px] xl:h-[62px] h-[69px] 2xl:h-[70px] 3xl:h-[83px] lg:mb-[21px] xl:mb-[24px] mb-[28px] 3xl:mb-[33px] object-contain w-[22%]"
                          compId="I15:994;8:646;4:355"
                          comWidth={71}
                          comHeight={69}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Placeholder"
                        />
                      </Row>
                      <Line
                        className="self-center w-[100%] h-[1px] bg-bluegray_50"
                        compId="I15:994;8:649"
                        comWidth={350}
                        comHeight={1}
                        compLeft={0}
                        compRight={0}
                        compType="Line"
                      />
                      <Row
                        className="items-start justify-between my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]"
                        compId="I15:994;8:648"
                        comWidth={321}
                        comHeight={97}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="items-start justify-start w-[73%]"
                          compId="I15:994;8:648;4:359"
                          comWidth={235}
                          comHeight={97}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Row
                            className="items-center justify-start w-[37%]"
                            compId="I15:994;8:648;4:347"
                            comWidth={87}
                            comHeight={17}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Text
                              className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="I15:994;8:648;4:344"
                              comWidth={31}
                              comHeight={17}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >
                              India
                            </Text>
                            <Text
                              className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="I15:994;8:648;4:345"
                              comWidth={4}
                              comHeight={17}
                              compLeft={4}
                              compRight={0}
                              compType="Text"
                            >
                              ·
                            </Text>
                            <Text
                              className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="I15:994;8:648;4:346"
                              comWidth={44}
                              comHeight={17}
                              compLeft={4}
                              compRight={0}
                              compType="Text"
                            >
                              1h ago
                            </Text>
                          </Row>
                          <Column
                            className="font-helveticaneue items-center lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[100%]"
                            compId="177"
                            comWidth={235}
                            comHeight={51}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-bold leading-[normal] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_901 text-left tracking-ls1 w-[100%]"
                              compId="I15:994;8:648;4:353"
                              comWidth={235}
                              comHeight={51}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >
                              India vs Australia: India hold on to earn a draw
                              on Day 5 in Sydney Test
                            </Text>
                          </Column>
                          <Row
                            className="font-helveticaneue1 items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[55%]"
                            compId="I15:994;8:648;4:348"
                            comWidth={129}
                            comHeight={17}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Text
                              className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="I15:994;8:648;4:349"
                              comWidth={84}
                              comHeight={17}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >
                              Trending with
                            </Text>
                            <Text
                              className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_500 w-[auto]"
                              compId="I15:994;8:648;4:352"
                              comWidth={41}
                              comHeight={17}
                              compLeft={4}
                              compRight={0}
                              compType="Text"
                            >
                              #sport
                            </Text>
                          </Row>
                        </Column>
                        <Image
                          src={"images/img_placeholder_11.png"}
                          className="lg:h-[54px] xl:h-[62px] h-[69px] 2xl:h-[70px] 3xl:h-[83px] lg:mb-[21px] xl:mb-[24px] mb-[28px] 3xl:mb-[33px] object-contain w-[22%]"
                          compId="I15:994;8:648;4:355"
                          comWidth={71}
                          comHeight={69}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Placeholder"
                        />
                      </Row>
                    </List>
                  </Column>
                  <Text
                    className="font-helveticaneue font-medium lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_500 w-[auto]"
                    compId="I15:994;8:651"
                    comWidth={74}
                    comHeight={16}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Show more
                  </Text>
                </Column>
              </Column>
            </Column>
            <Column
              className="bg-gray_50 font-helveticaneue items-start justify-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:pb-[11px] xl:pb-[13px] pb-[15px] 3xl:pb-[18px] pt-[11px] 3xl:pt-[13px] lg:pt-[8px] xl:pt-[9px] rounded-radius16 w-[100%]"
              compId="15:995"
              comWidth={350}
              comHeight={232}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_901 w-[auto]"
                compId="15:997"
                comWidth={137}
                comHeight={24}
                compLeft={16}
                compRight={0}
                compType="Text"
              >
                You might like
              </Text>
              <Column
                className="items-center mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]"
                compId="178"
                comWidth={350}
                comHeight={172}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="items-start justify-start lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] w-[100%]"
                  compId="155"
                  comWidth={350}
                  comHeight={172}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-center lg:mr-[12px] xl:mr-[14px] mr-[16px] 3xl:mr-[19px] pl-[1px] w-[95%]"
                    compId="179"
                    comWidth={319}
                    comHeight={118}
                    compLeft={0}
                    compRight={16}
                    compType="Column"
                  >
                    <List
                      className="gap-[0] min-h-[auto] w-[100%]"
                      compId="157"
                      comWidth={318}
                      comHeight={118}
                      compLeft={0}
                      compRight={0}
                      compType="List"
                      orientation="vertical"
                    >
                      <Row
                        className="items-center justify-between my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] w-[100%]"
                        compId="146"
                        comWidth={318}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                          compId="15:1002"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Image
                            src={"images/img_profilepicture_36.png"}
                            className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-cover rounded-radius50 w-[auto]"
                            compId="I15:1002;4:986"
                            comWidth={48}
                            comHeight={48}
                            compLeft={0}
                            compRight={0}
                            compType="CircleImage"
                            alt="ProfilePicture"
                          />
                        </Column>
                        <Column
                          className="items-start lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[47%]"
                          compId="145"
                          comWidth={151}
                          comHeight={38}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-bold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_901 w-[auto]"
                            compId="15:1000"
                            comWidth={112}
                            comHeight={19}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Bessie Cooper
                          </Text>
                          <Column
                            className="font-helveticaneue1 items-center w-[100%]"
                            compId="180"
                            comWidth={151}
                            comHeight={19}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]"
                              compId="15:1001"
                              comWidth={151}
                              comHeight={19}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >
                              @alessandroveronezi
                            </Text>
                          </Column>
                        </Column>
                        <Button
                          className="bg-gray_900 font-bold 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] xl:py-[4px] lg:py-[4px] py-[5.5px] 2xl:py-[5px] 3xl:py-[6px] rounded-radius15 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[25%]"
                          compId="15:1003"
                          comWidth={80}
                          comHeight={30}
                          compLeft={0}
                          compRight={0}
                          compType="Button"
                        >
                          Follow
                        </Button>
                      </Row>
                      <Line
                        className="self-center w-[100%] h-[1px] bg-bluegray_50"
                        compId="15:1012"
                        comWidth={350}
                        comHeight={1}
                        compLeft={0}
                        compRight={0}
                        compType="Line"
                      />
                      <Row
                        className="items-center justify-start my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] w-[100%]"
                        compId="149"
                        comWidth={318}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                          compId="15:1009"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Image
                            src={"images/img_profilepicture_37.png"}
                            className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-cover rounded-radius50 w-[auto]"
                            compId="I15:1009;4:986"
                            comWidth={48}
                            comHeight={48}
                            compLeft={0}
                            compRight={0}
                            compType="CircleImage"
                            alt="ProfilePicture"
                          />
                        </Column>
                        <Column
                          className="items-start ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[37%]"
                          compId="148"
                          comWidth={119}
                          comHeight={38}
                          compLeft={11}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-bold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_901 w-[auto]"
                            compId="15:1007"
                            comWidth={99}
                            comHeight={19}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Jenny Wilson
                          </Text>
                          <Column
                            className="font-helveticaneue1 items-center w-[100%]"
                            compId="181"
                            comWidth={119}
                            comHeight={19}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]"
                              compId="15:1008"
                              comWidth={119}
                              comHeight={19}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >
                              @gabrielcantarin
                            </Text>
                          </Column>
                        </Column>
                        <Button
                          className="bg-gray_900 font-bold lg:ml-[46px] xl:ml-[53px] ml-[60px] 3xl:ml-[72px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] xl:py-[4px] lg:py-[4px] py-[5.5px] 2xl:py-[5px] 3xl:py-[6px] rounded-radius15 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[25%]"
                          compId="15:1010"
                          comWidth={80}
                          comHeight={30}
                          compLeft={60}
                          compRight={0}
                          compType="Button"
                        >
                          Follow
                        </Button>
                      </Row>
                    </List>
                  </Column>
                  <Text
                    className="font-medium lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_500 w-[auto]"
                    compId="15:1014"
                    comWidth={74}
                    comHeight={16}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Show more
                  </Text>
                </Column>
              </Column>
            </Column>
          </Column>
          <Row
            className="items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[75%]"
            compId="139"
            comWidth={264}
            comHeight={14}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-normal xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
              compId="15:1017"
              comWidth={90}
              comHeight={14}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Terms of Service
            </Text>
            <Text
              className="font-normal xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
              compId="15:1021"
              comWidth={76}
              comHeight={14}
              compLeft={12}
              compRight={0}
              compType="Text"
            >
              Privacy Policy
            </Text>
            <Text
              className="font-normal xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
              compId="15:1022"
              comWidth={74}
              comHeight={14}
              compLeft={12}
              compRight={0}
              compType="Text"
            >
              Cookie Policy
            </Text>
          </Row>
          <Row
            className="items-center justify-start xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[53%]"
            compId="142"
            comWidth={187}
            comHeight={14}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-normal xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
              compId="15:1018"
              comWidth={67}
              comHeight={14}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Accessibility
            </Text>
            <Text
              className="font-normal xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
              compId="15:1019"
              comWidth={45}
              comHeight={14}
              compLeft={12}
              compRight={0}
              compType="Text"
            >
              Ads info
            </Text>
            <Text
              className="font-normal xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
              compId="15:1020"
              comWidth={28}
              comHeight={14}
              compLeft={12}
              compRight={0}
              compType="Text"
            >
              More
            </Text>
            <Image
              src={"images/img_group544_34.png"}
              className="h-[1.25px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] xl:h-[2px] mb-[6.37px] lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] mt-[6.38px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[5%]"
              compId="15:1024"
              comWidth={10}
              comHeight={1.25}
              compLeft={13}
              compRight={0}
              compType="Image"
              alt="Group544"
            />
          </Row>
          <Row
            className="items-center justify-start ml-[1px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[31%]"
            compId="15:1028"
            comWidth={108}
            comHeight={14}
            compLeft={1}
            compRight={0}
            compType="Row"
          >
            <Image
              src={"images/img_vector_54.png"}
              className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] xl:my-[1px] lg:my-[1px] my-[2px] object-contain w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"
              compId="I15:1029;120:720"
              comWidth={10}
              comHeight={10}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="Vector"
            />
            <Text
              className="font-normal lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
              compId="15:1030"
              comWidth={91}
              comHeight={14}
              compLeft={7}
              compRight={0}
              compType="Text"
            >
              2022 Twitter, Inc.
            </Text>
          </Row>
        </Column>
      </Stack>

      <ToastContainer />
    </>
  );
};

export default FollowersListPage;
