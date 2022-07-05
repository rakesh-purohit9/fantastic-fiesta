import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Image,
  Text,
  Button,
  Stack,
  Line,
  Input,
  List,
} from "components";

const ProfilePagePage = () => {
  const navigate = useNavigate();

  function handleNavigate9() {
    navigate("/followinglist");
  }
  function handleNavigate10() {
    navigate("/followerslist");
  }
  function handleNavigate11() {
    navigate("/");
  }
  function handleNavigate12() {
    navigate("/");
  }
  function handleBackNavigation3() {
    navigate(-1);
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column
        className="bg-white_A700 font-helveticaneue items-start justify-end mx-[auto] 3xl:pl-[103px] lg:pl-[66px] xl:pl-[76px] pl-[86px] w-[100%]"
        compId="15:584"
        comWidth={1440}
        comHeight={1080}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="items-center 3xl:mr-[103px] lg:mr-[66px] xl:mr-[76px] mr-[86px] w-[94%]"
          compId="70"
          comWidth={1268}
          comHeight={1116}
          compLeft={0}
          compRight={86}
          compType="Column"
        >
          <Row
            className="items-start justify-start w-[100%]"
            compId="51"
            comWidth={1268}
            comHeight={1116}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Column
              className="justify-start lg:mb-[46px] xl:mb-[53px] mb-[60px] 3xl:mb-[72px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:pt-[11px] xl:pt-[12px] pt-[14.44px] 2xl:pt-[14px] 3xl:pt-[17px] w-[20%]"
              compId="15:709"
              comWidth={255}
              comHeight={1032}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Column
                className="items-start justify-start ml-[11.12px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[65%]"
                compId="59"
                comWidth={164.88}
                comHeight={502}
                compLeft={11.12}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_vector_10.png"}
                  className="common-pointer lg:h-[18px] xl:h-[21px] h-[23.07px] 2xl:h-[24px] 3xl:h-[28px] ml-[1px] object-contain w-[17%]"
                  compId="I15:712;3:143"
                  comWidth={28.38}
                  comHeight={23.07}
                  compLeft={0.05}
                  compRight={0}
                  compType="Image"
                  onClick={handleNavigate12}
                  alt="Vector"
                />
                <Row
                  className="common-pointer items-start justify-start lg:mt-[25px] xl:mt-[29px] mt-[32.71px] 2xl:mt-[32px] 3xl:mt-[39px] w-[62%]"
                  compId="15:714"
                  comWidth={102.88}
                  comHeight={25.31}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                  onClick={handleNavigate11}
                >
                  <Image
                    src={"images/img_vector_11.png"}
                    className="lg:h-[20px] xl:h-[23px] h-[25.31px] 2xl:h-[26px] 3xl:h-[31px] object-contain w-[27%]"
                    compId="I15:714;3:292;3:97"
                    comWidth={27.75}
                    comHeight={25.31}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Text
                    className="font-medium mb-[1px] lg:ml-[16px] xl:ml-[18px] ml-[21.13px] 2xl:ml-[21px] 3xl:ml-[25px] mt-[1.78px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]"
                    compId="I15:714;3:293"
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
                  compId="15:715"
                  comWidth={118.19}
                  comHeight={24.37}
                  compLeft={1.69}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_vector_12.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24.37px] 2xl:h-[25px] 3xl:h-[30px] object-contain w-[21%]"
                    compId="I15:715;4:773;1:11"
                    comWidth={24.38}
                    comHeight={24.37}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Text
                    className="font-medium lg:ml-[17px] xl:ml-[20px] ml-[22.81px] 2xl:ml-[22px] 3xl:ml-[27px] my-[1px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]"
                    compId="I15:715;4:774"
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
                  compId="71"
                  comWidth={164.88}
                  comHeight={25.06}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-start justify-start w-[100%]"
                    compId="15:716"
                    comWidth={163.5}
                    comHeight={25.06}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_vector_13.png"}
                      className="lg:h-[20px] xl:h-[23px] h-[25.06px] 2xl:h-[26px] 3xl:h-[31px] object-contain w-[15%]"
                      compId="I15:716;4:773;1:14"
                      comWidth={25}
                      comHeight={25.06}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Vector"
                    />
                    <Text
                      className="font-medium lg:ml-[17px] xl:ml-[20px] ml-[22.5px] 2xl:ml-[22px] 3xl:ml-[27px] my-[1px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]"
                      compId="I15:716;4:774"
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
                  compId="15:717"
                  comWidth={140.5}
                  comHeight={23.23}
                  compLeft={1.38}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_vector_14.png"}
                    className="lg:h-[18px] xl:h-[21px] h-[22.5px] 2xl:h-[23px] 3xl:h-[28px] mb-[1px] object-contain w-[18%]"
                    compId="I15:717;4:773;1:5"
                    comWidth={25}
                    comHeight={22.5}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Text
                    className="font-medium lg:ml-[17px] xl:ml-[20px] ml-[22.5px] 2xl:ml-[22px] 3xl:ml-[27px] mt-[1px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]"
                    compId="I15:717;4:774"
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
                  compId="15:718"
                  comWidth={150.81}
                  comHeight={25.38}
                  compLeft={3.07}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_vector_15.png"}
                    className="lg:h-[20px] xl:h-[23px] h-[25.19px] 2xl:h-[26px] 3xl:h-[31px] mt-[1px] object-contain w-[14%]"
                    compId="I15:718;4:773;1:17"
                    comWidth={21.62}
                    comHeight={25.19}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Text
                    className="font-medium lg:mb-[1px] mb-[2.38px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] lg:ml-[18px] xl:ml-[21px] ml-[24.19px] 2xl:ml-[24px] 3xl:ml-[29px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]"
                    compId="I15:718;4:774"
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
                  compId="15:719"
                  comWidth={90.5}
                  comHeight={25}
                  compLeft={1.38}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_group_2.png"}
                    className="lg:h-[20px] xl:h-[23px] h-[25px] 2xl:h-[26px] 3xl:h-[31px] object-contain lg:w-[19px] xl:w-[22px] w-[25px] 3xl:w-[30px]"
                    compId="I15:719;4:773;1:19"
                    comWidth={25}
                    comHeight={25}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Group"
                  />
                  <Text
                    className="font-medium lg:ml-[17px] xl:ml-[20px] ml-[22.5px] 2xl:ml-[22px] 3xl:ml-[27px] my-[1px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]"
                    compId="I15:719;4:774"
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
                  className="items-start justify-start lg:ml-[2px] ml-[3.44px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:mt-[26px] xl:mt-[30px] mt-[34.57px] 2xl:mt-[34px] 3xl:mt-[41px] w-[63%]"
                  compId="15:720"
                  comWidth={104.44}
                  comHeight={25.42}
                  compLeft={3.44}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_vector_16.png"}
                    className="lg:h-[20px] xl:h-[23px] h-[25.42px] 2xl:h-[26px] 3xl:h-[31px] object-contain w-[20%]"
                    compId="I15:720;4:773;1:24"
                    comWidth={20.88}
                    comHeight={25.42}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Text
                    className="font-medium mb-[1px] lg:ml-[19px] xl:ml-[21px] ml-[24.56px] 2xl:ml-[24px] 3xl:ml-[29px] mt-[1.93px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]"
                    compId="I15:720;4:774"
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
                  compId="15:721"
                  comWidth={96.44}
                  comHeight={26.88}
                  compLeft={0.44}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_group_3.png"}
                    className="lg:h-[21px] xl:h-[24px] h-[26.88px] 2xl:h-[27px] 3xl:h-[33px] object-contain lg:w-[20px] xl:w-[23px] w-[26.88px] 2xl:w-[26px] 3xl:w-[32px]"
                    compId="I15:721;4:773;1:26"
                    comWidth={26.88}
                    comHeight={26.88}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Group"
                  />
                  <Text
                    className="font-medium mb-[1px] lg:ml-[16px] xl:ml-[19px] ml-[21.56px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[1px] mt-[2.44px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]"
                    compId="I15:721;4:774"
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
                compId="60"
                comWidth={232.43}
                comHeight={484}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Button
                  className="bg-blue_500 font-medium lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius245 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[100%]"
                  compId="15:723"
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
                  compId="15:724"
                  comWidth={232.43}
                  comHeight={39}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_profilepicture_14.png"}
                    className="lg:h-[31px] xl:h-[35px] h-[39px] 2xl:h-[40px] 3xl:h-[47px] object-contain lg:w-[30px] xl:w-[34px] w-[39px] 3xl:w-[46px]"
                    compId="I15:728;4:973"
                    comWidth={39}
                    comHeight={39}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="ProfilePicture"
                  />
                  <Column
                    className="items-start justify-start mb-[1px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[53%]"
                    compId="15:725"
                    comWidth={123}
                    comHeight={38}
                    compLeft={10}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]"
                      compId="15:726"
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
                      compId="72"
                      comWidth={123}
                      comHeight={19}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]"
                        compId="15:727"
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
                    src={"images/img_group544_13.png"}
                    className="h-[1.73px] 2xl:h-[2px] xl:h-[2px] lg:h-[2px] 3xl:h-[3px] lg:mb-[19px] xl:mb-[22px] mb-[25.14px] 2xl:mb-[25px] 3xl:mb-[30px] lg:ml-[36px] xl:ml-[41px] ml-[46.58px] 2xl:ml-[46px] 3xl:ml-[55px] xl:mt-[10px] mt-[12.13px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] object-contain w-[6%]"
                    compId="15:730"
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
            <Stack
              className="h-[1116px] 2xl:h-[1117px] 3xl:h-[1340px] lg:h-[868px] xl:h-[993px] lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] w-[48%]"
              compId="45"
              comWidth={614}
              comHeight={1116}
              compLeft={19}
              compRight={0}
              compType="Stack"
            >
              <Column
                className="absolute bottom-[0] inset-x-[0] items-start justify-start top-[3%] w-[100%]"
                compId="15:594"
                comWidth={614}
                comHeight={1086}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-start justify-start lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] w-[29%]"
                  compId="15:595"
                  comWidth={176}
                  comHeight={55}
                  compLeft={35}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_vector_17.png"}
                    className="common-pointer lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mb-[24px] xl:mb-[28px] mb-[32px] 3xl:mb-[38px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                    compId="I15:596;6:13237"
                    comWidth={16}
                    comHeight={16}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    onClick={handleBackNavigation3}
                    alt="Vector"
                  />
                  <Column
                    className="items-start justify-start lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] w-[74%]"
                    compId="15:597"
                    comWidth={131}
                    comHeight={55}
                    compLeft={28}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="font-helveticaneue items-center w-[100%]"
                      compId="74"
                      comWidth={131}
                      comHeight={28}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 w-[auto]"
                        compId="15:598"
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
                      className="font-helveticaneue1 font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]"
                      compId="15:599"
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
                <Column
                  className="items-center lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] w-[100%]"
                  compId="73"
                  comWidth={614}
                  comHeight={1014}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-center justify-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] w-[98%]"
                    compId="61"
                    comWidth={599}
                    comHeight={407}
                    compLeft={15}
                    compRight={0}
                    compType="Column"
                  >
                    <Stack
                      className="lg:h-[200px] xl:h-[228px] h-[256px] 2xl:h-[257px] 3xl:h-[308px] w-[100%]"
                      compId="15:600"
                      comWidth={599}
                      comHeight={256}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Image
                        src={"images/img_rectangle21.png"}
                        className="absolute lg:h-[156px] xl:h-[178px] h-[200px] 2xl:h-[201px] 3xl:h-[241px] object-cover top-[0] w-[100%]"
                        compId="15:601"
                        comWidth={599}
                        comHeight={200}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Rectangle21"
                      />
                      <Image
                        src={"images/img_ellipse7.png"}
                        className="absolute bottom-[0] xl:h-[105px] h-[117px] 2xl:h-[118px] 3xl:h-[141px] lg:h-[91px] left-[3%] object-contain rounded-radius50 w-[auto]"
                        compId="15:602"
                        comWidth={117}
                        comHeight={117}
                        compLeft={18}
                        compRight={0}
                        compType="CircleImage"
                        alt="Ellipse7"
                      />
                      <Button
                        className="absolute border border-bluegray_50 border-solid bottom-[3%] font-bold 3xl:py-[10px] lg:py-[6px] xl:py-[7px] py-[8.5px] 2xl:py-[8px] right-[4%] rounded-radius18 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 text-center w-[18%]"
                        compId="15:603"
                        comWidth={110}
                        comHeight={36}
                        compLeft={0}
                        compRight={24}
                        compType="Button"
                      >
                        Edit Profile
                      </Button>
                    </Stack>
                    <Column
                      className="items-start justify-start lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] lg:mr-[17px] xl:mr-[20px] mr-[23px] 3xl:mr-[27px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[95%]"
                      compId="63"
                      comWidth={569}
                      comHeight={135}
                      compLeft={7}
                      compRight={23}
                      compType="Column"
                    >
                      <Text
                        className="font-bold font-helveticaneue lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_901 w-[auto]"
                        compId="15:608"
                        comWidth={137}
                        comHeight={19}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Jerome Bell
                      </Text>
                      <Text
                        className="font-helveticaneue1 font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                        compId="15:607"
                        comWidth={108}
                        comHeight={17}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        @afonsoinocente
                      </Text>
                      <Text
                        className="font-helveticaneue1 font-normal mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                        compId="15:609"
                        comWidth={196}
                        comHeight={17}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        <span className="text-bluegray_600">
                          UX&UI designer at{" "}
                        </span>
                        <span className="text-blue_500">@abutechuz</span>
                      </Text>
                      <Column
                        className="font-helveticaneue1 items-center lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] w-[100%]"
                        compId="75"
                        comWidth={569}
                        comHeight={16}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="items-center justify-end py-[1px] w-[100%]"
                          compId="15:610"
                          comWidth={569}
                          comHeight={16}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Image
                            src={"images/img_group_4.png"}
                            className="lg:h-[11px] xl:h-[12px] h-[13.33px] 2xl:h-[14px] 3xl:h-[17px] my-[1px] object-contain w-[2%]"
                            compId="15:613"
                            comWidth={11.59}
                            comHeight={13.33}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="Group"
                          />
                          <Text
                            className="font-normal lg:ml-[4px] xl:ml-[5px] ml-[6.2px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[1px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
                            compId="15:616"
                            comWidth={51}
                            comHeight={14}
                            compLeft={6.2}
                            compRight={0}
                            compType="Text"
                          >
                            California
                          </Text>
                          <Image
                            src={"images/img_vector_18.png"}
                            className="lg:h-[11px] xl:h-[12px] h-[13.24px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[20px] xl:ml-[23px] ml-[26.42px] 2xl:ml-[26px] 3xl:ml-[31px] my-[1px] object-contain w-[2%]"
                            compId="I15:639;120:1432"
                            comWidth={13.23}
                            comHeight={13.24}
                            compLeft={26.42}
                            compRight={0}
                            compType="Image"
                            alt="Vector"
                          />
                          <Text
                            className="font-normal xl:ml-[4px] lg:ml-[4px] ml-[5.35px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[1px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-blue_500 w-[auto]"
                            compId="15:638"
                            comWidth={134}
                            comHeight={14}
                            compLeft={5.35}
                            compRight={0}
                            compType="Text"
                          >
                            t.me/boburjon_mavlonov
                          </Text>
                          <Image
                            src={"images/img_group_5.png"}
                            className="lg:h-[11px] h-[13.83px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] mb-[1px] lg:ml-[21px] xl:ml-[24px] ml-[27.17px] 2xl:ml-[27px] 3xl:ml-[32px] mt-[0] object-contain w-[2%]"
                            compId="15:619"
                            comWidth={11.67}
                            comHeight={13.83}
                            compLeft={27.17}
                            compRight={0}
                            compType="Image"
                            alt="Group"
                          />
                          <Text
                            className="font-normal lg:ml-[4px] xl:ml-[5px] ml-[6.16px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[1px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
                            compId="15:622"
                            comWidth={136}
                            comHeight={14}
                            compLeft={6.16}
                            compRight={0}
                            compType="Text"
                          >
                            Born November 24, 1994
                          </Text>
                          <Image
                            src={"images/img_group_6.png"}
                            className="lg:h-[11px] xl:h-[12px] h-[13.33px] 2xl:h-[14px] 3xl:h-[17px] lg:ml-[20px] xl:ml-[23px] ml-[26.33px] 2xl:ml-[26px] 3xl:ml-[31px] my-[1px] object-contain lg:w-[10px] xl:w-[11px] w-[13.33px] 2xl:w-[13px] 3xl:w-[16px]"
                            compId="15:625"
                            comWidth={13.33}
                            comHeight={13.33}
                            compLeft={26.33}
                            compRight={0}
                            compType="Image"
                            alt="Group"
                          />
                          <Text
                            className="font-normal xl:ml-[4px] lg:ml-[4px] ml-[5.34px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[1px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
                            compId="15:635"
                            comWidth={93}
                            comHeight={14}
                            compLeft={5.34}
                            compRight={0}
                            compType="Text"
                          >
                            Joined May 2004
                          </Text>
                        </Row>
                      </Column>
                      <Row
                        className="font-segoeui items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[27%]"
                        compId="15:640"
                        comWidth={153}
                        comHeight={14}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="common-pointer font-normal xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]"
                          compId="15:641"
                          comWidth={68}
                          comHeight={14}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                          onClick={handleNavigate9}
                        >
                          <span className="text-black_900 font-helveticaneue font-bold">
                            67
                          </span>
                          <span className="text-black_900 font-helveticaneue1">
                            {" "}
                          </span>
                          <span className="text-black_900_99 font-helveticaneue1">
                            Following
                          </span>
                        </Text>
                        <Text
                          className="common-pointer font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]"
                          compId="15:642"
                          comWidth={69}
                          comHeight={14}
                          compLeft={16}
                          compRight={0}
                          compType="Text"
                          onClick={handleNavigate10}
                        >
                          <span className="text-black_900 font-helveticaneue font-bold">
                            47
                          </span>
                          <span className="text-black_900 font-helveticaneue1">
                            {" "}
                          </span>
                          <span className="text-black_900_99 font-helveticaneue1">
                            Followers
                          </span>
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                  <Column
                    className="items-start justify-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]"
                    compId="62"
                    comWidth={614}
                    comHeight={583}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-center pr-[1px] w-[100%]"
                      compId="76"
                      comWidth={614}
                      comHeight={29}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Stack
                        className="lg:h-[23px] xl:h-[26px] h-[29px] 2xl:h-[30px] 3xl:h-[35px] w-[100%]"
                        compId="15:643"
                        comWidth={613}
                        comHeight={29}
                        compLeft={0}
                        compRight={0}
                        compType="Stack"
                      >
                        <Line
                          className="absolute bg-bluegray_50 bottom-[3%] h-[0.65px] rotate-[-90deg] w-[100%]"
                          compId="15:644"
                          comWidth={613}
                          comHeight={1}
                          compLeft={0}
                          compRight={0}
                          compType="Line"
                        />
                        <Row
                          className="absolute inset-y-[0] items-start justify-between left-[8%] right-[9%] w-[82%]"
                          compId="15:645"
                          comWidth={504}
                          comHeight={29}
                          compLeft={52}
                          compRight={57}
                          compType="Row"
                        >
                          <Column
                            className="items-center justify-start w-[8%]"
                            compId="15:646"
                            comWidth={42}
                            comHeight={29}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-bold xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_901 w-[auto]"
                              compId="15:648"
                              comWidth={42}
                              comHeight={14}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >
                              Tweets
                            </Text>
                            <div
                              className="bg-blue_500 h-[3px] 3xl:h-[4px] 2xl:h-[4px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mx-[auto] rotate-[-90deg] rounded-radius151 w-[90%]"
                              compId="15:647"
                              comWidth={38}
                              comHeight={3}
                              compLeft={2}
                              compRight={2}
                              compType="View"
                            ></div>
                          </Column>
                          <Text
                            className="font-bold lg:mb-[11px] xl:mb-[13px] mb-[15px] 3xl:mb-[18px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
                            compId="15:649"
                            comWidth={95}
                            comHeight={14}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Tweets & replies
                          </Text>
                          <Text
                            className="font-bold lg:mb-[11px] xl:mb-[13px] mb-[15px] 3xl:mb-[18px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
                            compId="15:650"
                            comWidth={36}
                            comHeight={14}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Media
                          </Text>
                          <Text
                            className="font-bold lg:mb-[11px] xl:mb-[13px] mb-[15px] 3xl:mb-[18px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
                            compId="15:651"
                            comWidth={31}
                            comHeight={14}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Likes
                          </Text>
                        </Row>
                      </Stack>
                    </Column>
                    <Row
                      className="items-center justify-start lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[14%]"
                      compId="15:654"
                      comWidth={85}
                      comHeight={12}
                      compLeft={20}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_vector_19.png"}
                        className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] my-[1px] object-contain w-[9%]"
                        compId="15:656"
                        comWidth={8}
                        comHeight={10}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Vector"
                      />
                      <Text
                        className="font-bold xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_601 w-[auto]"
                        compId="15:657"
                        comWidth={65}
                        comHeight={12}
                        compLeft={12}
                        compRight={0}
                        compType="Text"
                      >
                        Pinned Tweet
                      </Text>
                    </Row>
                    <Column
                      className="font-segoeui items-center xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]"
                      compId="77"
                      comWidth={614}
                      comHeight={514}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-start lg:ml-[25px] xl:ml-[29px] ml-[33px] 3xl:ml-[39px] lg:mr-[11px] xl:mr-[13px] mr-[15px] 3xl:mr-[18px] w-[92%]"
                        compId="15:660"
                        comWidth={566}
                        comHeight={152}
                        compLeft={33}
                        compRight={15}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_ellipse91.png"}
                          className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] mb-[104px] 3xl:mb-[124px] lg:mb-[80px] xl:mb-[92px] object-contain rounded-radius50 w-[auto]"
                          compId="15:662"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="CircleImage"
                          alt="Ellipse91"
                        />
                        <Column
                          className="items-start justify-start xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[89%]"
                          compId="15:663"
                          comWidth={506}
                          comHeight={152}
                          compLeft={12}
                          compRight={0}
                          compType="Column"
                        >
                          <Column
                            className="items-center w-[100%]"
                            compId="78"
                            comWidth={506}
                            comHeight={122}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Row
                              className="items-center justify-between xl:mr-[4px] lg:mr-[4px] mr-[5.57px] 2xl:mr-[5px] 3xl:mr-[6px] pl-[1px] xl:py-[2px] lg:py-[2px] py-[3px] w-[99%]"
                              compId="15:665"
                              comWidth={500.43}
                              comHeight={26}
                              compLeft={0}
                              compRight={5.57}
                              compType="Row"
                            >
                              <Row
                                className="items-center justify-evenly w-[53%]"
                                compId="68"
                                comWidth={264.5}
                                comHeight={20}
                                compLeft={0}
                                compRight={0}
                                compType="Row"
                              >
                                <Text
                                  className="font-bold font-helveticaneue my-[1px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]"
                                  compId="15:672"
                                  comWidth={90}
                                  comHeight={19}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Text"
                                >
                                  Jerome Bell
                                </Text>
                                <Text
                                  className="font-normal font-segoeui lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-bluegray_600 w-[auto]"
                                  compId="15:673"
                                  comWidth={3}
                                  comHeight={20}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Text"
                                >
                                  ·
                                </Text>
                                <Text
                                  className="font-helveticaneue1 font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]"
                                  compId="15:674"
                                  comWidth={118}
                                  comHeight={20}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Text"
                                >
                                  @afonsoinicente
                                </Text>
                                <Text
                                  className="font-helveticaneue1 font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]"
                                  compId="15:675"
                                  comWidth={40}
                                  comHeight={20}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Text"
                                >
                                  1 min
                                </Text>
                              </Row>
                              <Image
                                src={"images/img_group544_14.png"}
                                className="h-[1.73px] 2xl:h-[2px] xl:h-[2px] lg:h-[2px] 3xl:h-[3px] mb-[9.14px] mt-[9.13px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] object-contain w-[3%]"
                                compId="15:667"
                                comWidth={13.85}
                                comHeight={1.73}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="Group544"
                              />
                            </Row>
                            <Text
                              className="font-normal lg:leading-[18px] xl:leading-[21px] leading-[24.00px] 2xl:leading-[24px] 3xl:leading-[28px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_800 text-left w-[100%]"
                              compId="15:676"
                              comWidth={506}
                              comHeight={96}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >
                              <span className="text-gray_800 font-helveticaneue1">
                                The DesignLab is doing major work on
                                Community-Driven Design, with several different
                                variants. If you are working in this area,
                                submit a paper to the DIS conference here in San
                                Diego (see DesignLab posting below)....{" "}
                              </span>
                              <span className="text-blue_500 font-helveticaneue1">
                                https://facebook.com/don.norman.18/...
                              </span>
                            </Text>
                          </Column>
                          <Row
                            className="font-helveticaneue1 items-center justify-start xl:ml-[1px] lg:ml-[1px] ml-[2px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] pb-[1px] pl-[1px] pt-[1.67px] 2xl:pt-[1px] xl:pt-[1px] lg:pt-[1px] 3xl:pt-[2px] w-[84%]"
                            compId="15:677"
                            comWidth={423}
                            comHeight={18}
                            compLeft={2}
                            compRight={0}
                            compType="Row"
                          >
                            <Image
                              src={"images/img_vector_20.png"}
                              className="lg:h-[12px] h-[14.81px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] my-[0] object-contain lg:w-[11px] xl:w-[13px] w-[14.81px] 2xl:w-[14px] 3xl:w-[17px]"
                              compId="I15:679;3:374"
                              comWidth={14.81}
                              comHeight={14.81}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="Vector"
                            />
                            <Text
                              className="font-normal lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] xl:ml-[10px] ml-[11.62px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[9px] my-[1px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
                              compId="15:680"
                              comWidth={14}
                              comHeight={14}
                              compLeft={11.62}
                              compRight={0}
                              compType="Text"
                            >
                              61
                            </Text>
                            <Image
                              src={"images/img_vector_21.png"}
                              className="lg:h-[10px] h-[12.41px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[15px] 3xl:ml-[102px] lg:ml-[66px] xl:ml-[75px] ml-[85.01px] 2xl:ml-[85px] my-[1px] object-contain w-[4%]"
                              compId="I15:682;3:377"
                              comWidth={17.98}
                              comHeight={12.41}
                              compLeft={85.01}
                              compRight={0}
                              compType="Image"
                              alt="Vector"
                            />
                            <Text
                              className="font-normal lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] ml-[10.01px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
                              compId="15:683"
                              comWidth={14}
                              comHeight={14}
                              compLeft={10.01}
                              compRight={0}
                              compType="Text"
                            >
                              12
                            </Text>
                            <Image
                              src={"images/img_vector_22.png"}
                              className="lg:h-[12px] xl:h-[13px] h-[14.19px] 2xl:h-[15px] 3xl:h-[18px] 3xl:ml-[103px] lg:ml-[67px] xl:ml-[76px] ml-[86.46px] 2xl:ml-[86px] my-[1px] object-contain w-[4%]"
                              compId="I15:685;3:380"
                              comWidth={15.07}
                              comHeight={14.19}
                              compLeft={86.46}
                              compRight={0}
                              compType="Image"
                              alt="Vector"
                            />
                            <Text
                              className="font-normal xl:ml-[10px] ml-[11.47px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] my-[1px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-pink_500 w-[auto]"
                              compId="15:686"
                              comWidth={25}
                              comHeight={14}
                              compLeft={11.47}
                              compRight={0}
                              compType="Text"
                            >
                              6.2K
                            </Text>
                            <Image
                              src={"images/img_group_7.png"}
                              className="lg:h-[12px] h-[14.77px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] lg:ml-[58px] xl:ml-[67px] ml-[75.5px] 2xl:ml-[75px] 3xl:ml-[90px] my-[1px] object-contain w-[4%]"
                              compId="I15:688;3:385"
                              comWidth={15}
                              comHeight={14.77}
                              compLeft={75.5}
                              compRight={0}
                              compType="Image"
                              alt="Group"
                            />
                            <Text
                              className="font-normal lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] xl:ml-[10px] ml-[11.5px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] my-[1px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
                              compId="15:689"
                              comWidth={14}
                              comHeight={14}
                              compLeft={11.5}
                              compRight={0}
                              compType="Text"
                            >
                              61
                            </Text>
                          </Row>
                        </Column>
                      </Row>
                      <Line
                        className="bg-bluegray_50 h-[1px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]"
                        compId="15:690"
                        comWidth={614}
                        comHeight={1}
                        compLeft={0}
                        compRight={0}
                        compType="Line"
                      />
                      <Row
                        className="font-helveticaneue1 items-start justify-start lg:ml-[25px] xl:ml-[29px] ml-[33px] 3xl:ml-[39px] lg:mr-[11px] xl:mr-[13px] mr-[15px] 3xl:mr-[18px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[92%]"
                        compId="15:692"
                        comWidth={566}
                        comHeight={337}
                        compLeft={33}
                        compRight={15}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_ellipse92.png"}
                          className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] lg:mb-[224px] xl:mb-[257px] mb-[289px] 3xl:mb-[347px] object-contain rounded-radius50 w-[auto]"
                          compId="15:693"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="CircleImage"
                          alt="Ellipse92"
                        />
                        <Column
                          className="items-start justify-start xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[89%]"
                          compId="15:694"
                          comWidth={506}
                          comHeight={337}
                          compLeft={12}
                          compRight={0}
                          compType="Column"
                        >
                          <Column
                            className="items-center xl:mr-[4px] lg:mr-[4px] mr-[5.57px] 2xl:mr-[5px] 3xl:mr-[6px] w-[99%]"
                            compId="79"
                            comWidth={500.43}
                            comHeight={26}
                            compLeft={0}
                            compRight={5.57}
                            compType="Column"
                          >
                            <Row
                              className="items-center justify-between pl-[1px] xl:py-[2px] lg:py-[2px] py-[3px] w-[100%]"
                              compId="15:696"
                              comWidth={500.43}
                              comHeight={26}
                              compLeft={0}
                              compRight={0}
                              compType="Row"
                            >
                              <Row
                                className="items-center justify-evenly w-[52%]"
                                compId="69"
                                comWidth={261.5}
                                comHeight={20}
                                compLeft={0}
                                compRight={0}
                                compType="Row"
                              >
                                <Text
                                  className="font-bold font-helveticaneue my-[1px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]"
                                  compId="15:703"
                                  comWidth={90}
                                  comHeight={19}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Text"
                                >
                                  Jerome Bell
                                </Text>
                                <Text
                                  className="font-helveticaneue1 font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]"
                                  compId="15:704"
                                  comWidth={118}
                                  comHeight={20}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Text"
                                >
                                  @afonsoinicente
                                </Text>
                                <Text
                                  className="font-normal font-segoeui lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-bluegray_600 w-[auto]"
                                  compId="15:705"
                                  comWidth={3}
                                  comHeight={20}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Text"
                                >
                                  ·
                                </Text>
                                <Text
                                  className="font-helveticaneue1 font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]"
                                  compId="15:706"
                                  comWidth={37}
                                  comHeight={20}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Text"
                                >
                                  Apr 1
                                </Text>
                              </Row>
                              <Image
                                src={"images/img_group544_15.png"}
                                className="h-[1.73px] 2xl:h-[2px] xl:h-[2px] lg:h-[2px] 3xl:h-[3px] mb-[9.14px] mt-[9.13px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] object-contain w-[3%]"
                                compId="15:698"
                                comWidth={13.85}
                                comHeight={1.73}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="Group544"
                              />
                            </Row>
                          </Column>
                          <Text
                            className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_800 w-[auto]"
                            compId="15:707"
                            comWidth={121}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Qurantine days...
                          </Text>
                          <Column
                            className="items-center xl:mr-[4px] lg:mr-[4px] mr-[5.57px] 2xl:mr-[5px] 3xl:mr-[6px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] xl:pr-[11px] pr-[12.43px] 2xl:pr-[12px] 3xl:pr-[14px] lg:pr-[9px] w-[99%]"
                            compId="80"
                            comWidth={500.43}
                            comHeight={275}
                            compLeft={0}
                            compRight={5.57}
                            compType="Column"
                          >
                            <Image
                              src={"images/img_image9.png"}
                              className="lg:h-[214px] xl:h-[245px] h-[275px] 2xl:h-[276px] 3xl:h-[331px] object-contain rounded-radius16 w-[100%]"
                              compId="15:708"
                              comWidth={488}
                              comHeight={275}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="image9"
                            />
                          </Column>
                        </Column>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Line
                className="absolute bg-bluegray_50 h-[1px] inset-y-[0] left-[0] my-[auto] rotate-[-90deg] w-[1px]"
                compId="15:734"
                comWidth={1}
                comHeight={1080}
                compLeft={0}
                compRight={0}
                compType="Line"
              />
              <Line
                className="absolute bg-bluegray_50 h-[1px] inset-y-[0] my-[auto] right-[0] rotate-[-90deg] w-[1px]"
                compId="15:735"
                comWidth={1}
                comHeight={1080}
                compLeft={0}
                compRight={0}
                compType="Line"
              />
            </Stack>
            <Column
              className="font-helveticaneue1 items-start justify-start lg:mb-[180px] xl:mb-[206px] mb-[232px] 3xl:mb-[278px] lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] w-[28%]"
              compId="15:736"
              comWidth={350}
              comHeight={836}
              compLeft={30}
              compRight={0}
              compType="Column"
            >
              <Column
                className="items-center w-[100%]"
                compId="81"
                comWidth={350}
                comHeight={753}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="bg-transparent border-0 font-normal p-[0] lg:pl-[13px] xl:pl-[14px] pl-[16.78px] 2xl:pl-[16px] 3xl:pl-[20px] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_600 text-bluegray_600 tracking-ls1 w-[100%]"
                  WrapClassName="2xl:pl-[16px] 3xl:pl-[20px] 3xl:pr-[26px] 3xl:py-[12px] bg-bluegray_50 flex lg:mr-[1px] lg:pl-[13px] lg:pr-[17px] lg:py-[7px] mr-[2px] pl-[16.78px] pr-[22px] py-[10px] rounded-radius195 w-[99%] xl:mr-[1px] xl:pl-[14px] xl:pr-[19px] xl:py-[8px]"
                  compId="15:737"
                  comWidth={0}
                  comHeight={39}
                  compLeft={0}
                  compRight={0}
                  compType="SearchView"
                  name="SearchBar"
                  placeholder="Search Twitter"
                  prefix={
                    <Image
                      src={"images/img_vector_23.png"}
                      className="cursor-pointer w-[15.64px] h-[15.64px] lg:w-[12px] lg:h-[13px] xl:w-[13px] xl:h-[14px] 2xl:w-[15px] 2xl:h-[16px] 3xl:w-[18px] 3xl:h-[19px] my-[auto]"
                      compId="I15:737;4:334;4:329"
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
                        src={"images/close1.svg"}
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
                  className="bg-gray_50 font-helveticaneue items-start justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:pb-[11px] xl:pb-[13px] pb-[15px] 3xl:pb-[18px] pt-[11px] 3xl:pt-[13px] lg:pt-[8px] xl:pt-[9px] rounded-radius16 w-[100%]"
                  compId="15:739"
                  comWidth={350}
                  comHeight={232}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_901 w-[auto]"
                    compId="15:741"
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
                    compId="82"
                    comWidth={350}
                    comHeight={172}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] w-[100%]"
                      compId="64"
                      comWidth={350}
                      comHeight={172}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="items-center lg:mr-[12px] xl:mr-[14px] mr-[16px] 3xl:mr-[19px] pl-[1px] w-[95%]"
                        compId="83"
                        comWidth={319}
                        comHeight={118}
                        compLeft={0}
                        compRight={16}
                        compType="Column"
                      >
                        <List
                          className="gap-[0] min-h-[auto] w-[100%]"
                          compId="66"
                          comWidth={318}
                          comHeight={118}
                          compLeft={0}
                          compRight={0}
                          compType="List"
                          orientation="vertical"
                        >
                          <Row
                            className="items-center justify-between my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] w-[100%]"
                            compId="54"
                            comWidth={318}
                            comHeight={48}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Column
                              className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                              compId="15:746"
                              comWidth={48}
                              comHeight={48}
                              compLeft={0}
                              compRight={0}
                              compType="Column"
                            >
                              <Image
                                src={"images/img_profilepicture_15.png"}
                                className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-cover rounded-radius50 w-[auto]"
                                compId="I15:746;4:986"
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
                              compId="53"
                              comWidth={151}
                              comHeight={38}
                              compLeft={0}
                              compRight={0}
                              compType="Column"
                            >
                              <Text
                                className="font-bold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_901 w-[auto]"
                                compId="15:744"
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
                                compId="84"
                                comWidth={151}
                                comHeight={19}
                                compLeft={0}
                                compRight={0}
                                compType="Column"
                              >
                                <Text
                                  className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]"
                                  compId="15:745"
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
                              compId="15:747"
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
                            compId="15:756"
                            comWidth={350}
                            comHeight={1}
                            compLeft={0}
                            compRight={0}
                            compType="Line"
                          />
                          <Row
                            className="items-center justify-start my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] w-[100%]"
                            compId="57"
                            comWidth={318}
                            comHeight={48}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Column
                              className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                              compId="15:753"
                              comWidth={48}
                              comHeight={48}
                              compLeft={0}
                              compRight={0}
                              compType="Column"
                            >
                              <Image
                                src={"images/img_profilepicture_16.png"}
                                className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-cover rounded-radius50 w-[auto]"
                                compId="I15:753;4:986"
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
                              compId="56"
                              comWidth={119}
                              comHeight={38}
                              compLeft={11}
                              compRight={0}
                              compType="Column"
                            >
                              <Text
                                className="font-bold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_901 w-[auto]"
                                compId="15:751"
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
                                compId="85"
                                comWidth={119}
                                comHeight={19}
                                compLeft={0}
                                compRight={0}
                                compType="Column"
                              >
                                <Text
                                  className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]"
                                  compId="15:752"
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
                              compId="15:754"
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
                        compId="15:758"
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
                  compId="15:738"
                  comWidth={350}
                  comHeight={446}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_901 tracking-ls1 w-[auto]"
                    compId="I15:738;8:642"
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
                    compId="86"
                    comWidth={350}
                    comHeight={386}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] pt-[11px] 3xl:pt-[13px] lg:pt-[8px] xl:pt-[9px] w-[100%]"
                      compId="65"
                      comWidth={350}
                      comHeight={386}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="font-helveticaneue1 items-center lg:mr-[10px] xl:mr-[12px] mr-[14px] 3xl:mr-[16px] w-[96%]"
                        compId="87"
                        comWidth={321}
                        comHeight={333}
                        compLeft={0}
                        compRight={14}
                        compType="Column"
                      >
                        <List
                          className="gap-[0] min-h-[auto] w-[100%]"
                          compId="67"
                          comWidth={321}
                          comHeight={333}
                          compLeft={0}
                          compRight={0}
                          compType="List"
                          orientation="vertical"
                        >
                          <Row
                            className="items-start justify-between my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]"
                            compId="I15:738;8:644"
                            comWidth={321}
                            comHeight={97}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Column
                              className="items-start justify-start w-[73%]"
                              compId="I15:738;8:644;4:359"
                              comWidth={235}
                              comHeight={97}
                              compLeft={0}
                              compRight={0}
                              compType="Column"
                            >
                              <Row
                                className="items-center justify-start w-[57%]"
                                compId="I15:738;8:644;4:347"
                                comWidth={133}
                                comHeight={17}
                                compLeft={0}
                                compRight={0}
                                compType="Row"
                              >
                                <Text
                                  className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                                  compId="I15:738;8:644;4:344"
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
                                  compId="I15:738;8:644;4:345"
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
                                  compId="I15:738;8:644;4:346"
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
                                compId="88"
                                comWidth={235}
                                comHeight={51}
                                compLeft={0}
                                compRight={0}
                                compType="Column"
                              >
                                <Text
                                  className="font-bold leading-[normal] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_901 text-left tracking-ls1 w-[100%]"
                                  compId="I15:738;8:644;4:353"
                                  comWidth={235}
                                  comHeight={51}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Text"
                                >
                                  England’s Chief Medical Officer says the UK is
                                  at the most dangerous time of the pandemic
                                </Text>
                              </Column>
                              <Row
                                className="font-helveticaneue1 items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[62%]"
                                compId="I15:738;8:644;4:348"
                                comWidth={146}
                                comHeight={17}
                                compLeft={0}
                                compRight={0}
                                compType="Row"
                              >
                                <Text
                                  className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                                  compId="I15:738;8:644;4:349"
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
                                  compId="I15:738;8:644;4:352"
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
                              src={"images/img_placeholder_3.png"}
                              className="lg:h-[54px] xl:h-[62px] h-[69px] 2xl:h-[70px] 3xl:h-[83px] lg:mb-[21px] xl:mb-[24px] mb-[28px] 3xl:mb-[33px] object-contain w-[22%]"
                              compId="I15:738;8:644;4:355"
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
                            compId="I15:738;8:649"
                            comWidth={350}
                            comHeight={1}
                            compLeft={0}
                            compRight={0}
                            compType="Line"
                          />
                          <Row
                            className="items-start justify-between my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]"
                            compId="I15:738;8:646"
                            comWidth={321}
                            comHeight={97}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Column
                              className="items-start justify-start w-[73%]"
                              compId="I15:738;8:646;4:359"
                              comWidth={235}
                              comHeight={97}
                              compLeft={0}
                              compRight={0}
                              compType="Column"
                            >
                              <Row
                                className="items-center justify-start w-[48%]"
                                compId="I15:738;8:646;4:347"
                                comWidth={112}
                                comHeight={17}
                                compLeft={0}
                                compRight={0}
                                compType="Row"
                              >
                                <Text
                                  className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                                  compId="I15:738;8:646;4:344"
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
                                  compId="I15:738;8:646;4:345"
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
                                  compId="I15:738;8:646;4:346"
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
                                compId="89"
                                comWidth={235}
                                comHeight={51}
                                compLeft={0}
                                compRight={0}
                                compType="Column"
                              >
                                <Text
                                  className="font-bold leading-[normal] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_901 text-left tracking-ls1 w-[100%]"
                                  compId="I15:738;8:646;4:353"
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
                                compId="I15:738;8:646;4:348"
                                comWidth={133}
                                comHeight={17}
                                compLeft={0}
                                compRight={0}
                                compType="Row"
                              >
                                <Text
                                  className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                                  compId="I15:738;8:646;4:349"
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
                                  compId="I15:738;8:646;4:352"
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
                              src={"images/img_placeholder_4.png"}
                              className="lg:h-[54px] xl:h-[62px] h-[69px] 2xl:h-[70px] 3xl:h-[83px] lg:mb-[21px] xl:mb-[24px] mb-[28px] 3xl:mb-[33px] object-contain w-[22%]"
                              compId="I15:738;8:646;4:355"
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
                            compId="I15:738;8:649"
                            comWidth={350}
                            comHeight={1}
                            compLeft={0}
                            compRight={0}
                            compType="Line"
                          />
                          <Row
                            className="items-start justify-between my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]"
                            compId="I15:738;8:648"
                            comWidth={321}
                            comHeight={97}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Column
                              className="items-start justify-start w-[73%]"
                              compId="I15:738;8:648;4:359"
                              comWidth={235}
                              comHeight={97}
                              compLeft={0}
                              compRight={0}
                              compType="Column"
                            >
                              <Row
                                className="items-center justify-start w-[37%]"
                                compId="I15:738;8:648;4:347"
                                comWidth={87}
                                comHeight={17}
                                compLeft={0}
                                compRight={0}
                                compType="Row"
                              >
                                <Text
                                  className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                                  compId="I15:738;8:648;4:344"
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
                                  compId="I15:738;8:648;4:345"
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
                                  compId="I15:738;8:648;4:346"
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
                                compId="90"
                                comWidth={235}
                                comHeight={51}
                                compLeft={0}
                                compRight={0}
                                compType="Column"
                              >
                                <Text
                                  className="font-bold leading-[normal] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_901 text-left tracking-ls1 w-[100%]"
                                  compId="I15:738;8:648;4:353"
                                  comWidth={235}
                                  comHeight={51}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Text"
                                >
                                  India vs Australia: India hold on to earn a
                                  draw on Day 5 in Sydney Test
                                </Text>
                              </Column>
                              <Row
                                className="font-helveticaneue1 items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[55%]"
                                compId="I15:738;8:648;4:348"
                                comWidth={129}
                                comHeight={17}
                                compLeft={0}
                                compRight={0}
                                compType="Row"
                              >
                                <Text
                                  className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                                  compId="I15:738;8:648;4:349"
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
                                  compId="I15:738;8:648;4:352"
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
                              src={"images/img_placeholder_5.png"}
                              className="lg:h-[54px] xl:h-[62px] h-[69px] 2xl:h-[70px] 3xl:h-[83px] lg:mb-[21px] xl:mb-[24px] mb-[28px] 3xl:mb-[33px] object-contain w-[22%]"
                              compId="I15:738;8:648;4:355"
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
                        compId="I15:738;8:651"
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
                compId="46"
                comWidth={264}
                comHeight={14}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-normal xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
                  compId="15:761"
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
                  compId="15:765"
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
                  compId="15:766"
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
                compId="49"
                comWidth={187}
                comHeight={14}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-normal xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
                  compId="15:762"
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
                  compId="15:763"
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
                  compId="15:764"
                  comWidth={28}
                  comHeight={14}
                  compLeft={12}
                  compRight={0}
                  compType="Text"
                >
                  More
                </Text>
                <Image
                  src={"images/img_group544_16.png"}
                  className="h-[1.25px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] xl:h-[2px] mb-[6.37px] lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] mt-[6.38px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[5%]"
                  compId="15:768"
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
                compId="15:772"
                comWidth={108}
                comHeight={14}
                compLeft={1}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_vector_24.png"}
                  className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] xl:my-[1px] lg:my-[1px] my-[2px] object-contain w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"
                  compId="I15:773;120:720"
                  comWidth={10}
                  comHeight={10}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-normal lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
                  compId="15:774"
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
          </Row>
        </Column>
        <Line
          className="bg-black_900_14 h-[1px] lg:ml-[182px] xl:ml-[208px] ml-[234.5px] 2xl:ml-[234px] 3xl:ml-[281px] lg:mt-[133px] xl:mt-[152px] mt-[171px] 3xl:mt-[205px] w-[51%]"
          compId="15:587"
          comWidth={692}
          comHeight={1}
          compLeft={234.5}
          compRight={0}
          compType="Line"
        />
      </Column>
    </>
  );
};

export default ProfilePagePage;
