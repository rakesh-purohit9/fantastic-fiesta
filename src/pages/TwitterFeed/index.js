import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Stack,
  Column,
  Line,
  Row,
  Text,
  Image,
  Button,
  List,
  Input,
} from "components";

const TwitterFeedPage = () => {
  const navigate = useNavigate();

  function handleNavigate13() {
    navigate("/profilepage");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Stack
        className="bg-white_A700 font-helveticaneue h-[1080px] 2xl:h-[1081px] 3xl:h-[1297px] lg:h-[840px] xl:h-[961px] mx-[auto] w-[100%]"
        compId="15:1031"
        comWidth={1440}
        comHeight={1080}
        compLeft={0}
        compRight={0}
        compType="Stack"
      >
        <Stack
          className="absolute bottom-[0] lg:h-[1002px] xl:h-[1146px] h-[1288px] 2xl:h-[1289px] 3xl:h-[1547px] left-[22%] w-[48%]"
          compId="93"
          comWidth={692}
          comHeight={1288}
          compLeft={320.5}
          compRight={0}
          compType="Stack"
        >
          <Column
            className="absolute bottom-[0] items-center justify-start w-[100%]"
            compId="94"
            comWidth={692}
            comHeight={693}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="items-center justify-start lg:ml-[30px] xl:ml-[35px] ml-[39.5px] 2xl:ml-[39px] 3xl:ml-[47px] lg:mr-[41px] xl:mr-[47px] mr-[53.5px] 2xl:mr-[53px] 3xl:mr-[64px] w-[87%]"
              compId="106"
              comWidth={599}
              comHeight={388}
              compLeft={39.5}
              compRight={53.5}
              compType="Column"
            >
              <Line
                className="bg-bluegray_50 h-[1px] w-[100%]"
                compId="15:1041"
                comWidth={599}
                comHeight={1}
                compLeft={0}
                compRight={0}
                compType="Line"
              />
              <Line
                className="bg-bluegray_50 h-[1px] lg:mt-[300px] xl:mt-[343px] mt-[386px] 3xl:mt-[463px] w-[100%]"
                compId="15:1042"
                comWidth={599}
                comHeight={1}
                compLeft={0}
                compRight={0}
                compType="Line"
              />
            </Column>
            <Line
              className="bg-black_900_14 h-[1px] lg:mt-[236px] xl:mt-[270px] mt-[304px] 3xl:mt-[365px] w-[100%]"
              compId="15:1034"
              comWidth={692}
              comHeight={1}
              compLeft={0}
              compRight={0}
              compType="Line"
            />
          </Column>
          <Column
            className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[2%] w-[86%]"
            compId="15:1043"
            comWidth={598}
            comHeight={161}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="items-center w-[100%]"
              compId="117"
              comWidth={598}
              comHeight={53}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="bg-white_A700 items-center justify-between lg:p-[11px] xl:p-[13px] pl-[15px] 3xl:pl-[18px] pr-[14.75px] 2xl:pr-[14px] 3xl:pr-[17px] py-[15px] 3xl:py-[18px] w-[100%]"
                compId="15:1044"
                comWidth={598}
                comHeight={53}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-bold lg:text-[14px] xl:text-[16px] text-[19px] 3xl:text-[22px] text-gray_901 w-[auto]"
                  compId="I15:1044;4:1"
                  comWidth={54}
                  comHeight={23}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Home
                </Text>
                <Image
                  src={"images/img_vector_25.png"}
                  className="lg:h-[17px] xl:h-[20px] h-[21.4px] 2xl:h-[22px] 3xl:h-[26px] my-[1px] object-contain w-[4%]"
                  compId="I15:1044;4:15;4:13"
                  comWidth={22.5}
                  comHeight={21.4}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
              </Row>
            </Column>
            <Row
              className="font-helveticaneue1 items-center justify-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[38%]"
              compId="15:1045"
              comWidth={229}
              comHeight={48}
              compLeft={15}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_profilepicture_17.png"}
                className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-contain rounded-radius50 w-[auto]"
                compId="15:1046"
                comWidth={48}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="CircleImage"
                alt="ProfilePicture"
              />
              <Text
                className="font-normal lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_600 tracking-ls1 w-[auto]"
                compId="15:1047"
                comWidth={168}
                comHeight={24}
                compLeft={13}
                compRight={0}
                compType="Text"
              >
                What’s happening?
              </Text>
            </Row>
            <Column
              className="font-helveticaneue items-end mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:pr-[11px] xl:pr-[13px] pr-[15px] 3xl:pr-[18px] w-[100%]"
              compId="118"
              comWidth={598}
              comHeight={39}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-end w-[87%]"
                compId="15:1048"
                comWidth={510}
                comHeight={39}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Row
                  className="items-center justify-between lg:mb-[6px] xl:mb-[7px] mb-[8.2px] 2xl:mb-[8px] 3xl:mb-[9px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9.1px] 2xl:mt-[9px] w-[34%]"
                  compId="113"
                  comWidth={175.7}
                  comHeight={21.7}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_group_8.png"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    compId="I15:1050;4:204"
                    comWidth={20}
                    comHeight={20}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Group"
                  />
                  <Image
                    src={"images/img_group_9.png"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain w-[12%]"
                    compId="I15:1051;4:200"
                    comWidth={21.5}
                    comHeight={20}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Group"
                  />
                  <Image
                    src={"images/img_vector_26.png"}
                    className="lg:h-[15px] xl:h-[17px] h-[18.97px] 2xl:h-[19px] 3xl:h-[23px] my-[1px] object-contain w-[11%]"
                    compId="I15:1052;4:198"
                    comWidth={20}
                    comHeight={18.97}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Stack
                    className="lg:h-[17px] xl:h-[20px] h-[21.7px] 2xl:h-[22px] 3xl:h-[27px] w-[34%]"
                    compId="91"
                    comWidth={59.7}
                    comHeight={21.7}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <Image
                      src={"images/img_group_10.png"}
                      className="absolute lg:h-[17px] xl:h-[20px] h-[21.5px] 2xl:h-[22px] 3xl:h-[26px] inset-y-[0] left-[0] my-[auto] object-contain lg:w-[16px] xl:w-[19px] w-[21.5px] 2xl:w-[21px] 3xl:w-[25px]"
                      compId="I15:1053;4:191"
                      comWidth={21.5}
                      comHeight={21.5}
                      compLeft={0.25}
                      compRight={0}
                      compType="Image"
                      alt="Group"
                    />
                    <Image
                      src={"images/img_group_11.png"}
                      className="absolute lg:h-[17px] xl:h-[20px] h-[21.7px] 2xl:h-[22px] 3xl:h-[27px] inset-[0] object-cover w-[100%]"
                      compId="I15:1054;4:185"
                      comWidth={59.7}
                      comHeight={21.7}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Group"
                    />
                  </Stack>
                </Row>
                <Button
                  className="bg-blue_500_87 font-bold lg:ml-[198px] xl:ml-[227px] ml-[255.3px] 2xl:ml-[255px] 3xl:ml-[306px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius195 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[15%]"
                  compId="15:1055"
                  comWidth={77}
                  comHeight={39}
                  compLeft={255.3}
                  compRight={0}
                  compType="Button"
                >
                  Tweet
                </Button>
              </Row>
            </Column>
          </Column>
          <Line
            className="absolute bg-bluegray_50 h-[1px] left-[6%] rotate-[-90deg] top-[0] w-[1px]"
            compId="15:1056"
            comWidth={1}
            comHeight={1080}
            compLeft={39.5}
            compRight={0}
            compType="Line"
          />
          <Line
            className="absolute bg-bluegray_50 h-[1px] right-[6%] rotate-[-90deg] top-[0] w-[1px]"
            compId="15:1057"
            comWidth={1}
            comHeight={926}
            compLeft={0}
            compRight={38.5}
            compType="Line"
          />
        </Stack>
        <Column
          className="absolute bottom-[0] items-start justify-end left-[27%] xl:pt-[3px] lg:pt-[3px] pt-[4px] w-[39%]"
          compId="15:1058"
          comWidth={568}
          comHeight={1147}
          compLeft={391}
          compRight={0}
          compType="Column"
        >
          <Column
            className="font-helveticaneue1 items-center w-[100%]"
            compId="119"
            comWidth={568}
            comHeight={331}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-start justify-between w-[100%]"
              compId="15:1061"
              comWidth={568}
              comHeight={331}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-start lg:mb-[219px] xl:mb-[250px] mb-[282px] 3xl:mb-[338px] mt-[1px] rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                compId="15:1062"
                comWidth={48}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_profilepicture_18.png"}
                  className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-cover rounded-radius50 w-[auto]"
                  compId="I15:1062;4:986"
                  comWidth={48}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="CircleImage"
                  alt="ProfilePicture"
                />
              </Column>
              <Column
                className="items-start justify-start w-[90%]"
                compId="15:1063"
                comWidth={509}
                comHeight={331}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="items-center xl:pr-[5px] lg:pr-[5px] pr-[6.57px] 2xl:pr-[6px] 3xl:pr-[7px] w-[100%]"
                  compId="121"
                  comWidth={509}
                  comHeight={19}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-between w-[100%]"
                    compId="15:1066"
                    comWidth={502.43}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Row
                      className="items-center justify-between w-[41%]"
                      compId="114"
                      comWidth={205}
                      comHeight={19}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-bold font-helveticaneue lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_901 w-[auto]"
                        compId="15:1067"
                        comWidth={88}
                        comHeight={19}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Devon Lane
                      </Text>
                      <Text
                        className="font-helveticaneue1 font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]"
                        compId="15:1068"
                        comWidth={71}
                        comHeight={19}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        @johndue
                      </Text>
                      <Text
                        className="font-normal font-sfcompactdisplay my-[1px] not-italic lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-bluegray_600 w-[auto]"
                        compId="15:1069"
                        comWidth={4}
                        comHeight={18}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        ·
                      </Text>
                      <Text
                        className="font-helveticaneue1 font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]"
                        compId="15:1070"
                        comWidth={26}
                        comHeight={19}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        23s
                      </Text>
                    </Row>
                    <Image
                      src={"images/img_group544_17.png"}
                      className="h-[1.73px] 2xl:h-[2px] xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9.14px] 2xl:mb-[9px] lg:mt-[6px] xl:mt-[7px] mt-[8.13px] 2xl:mt-[8px] 3xl:mt-[9px] object-contain w-[3%]"
                      compId="15:1092"
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
                  className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_800 w-[auto]"
                  compId="15:1072"
                  comWidth={145}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Tom is in a big hurry.
                </Text>
                <Column
                  className="items-center lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]"
                  compId="122"
                  comWidth={509}
                  comHeight={247}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Stack
                    className="lg:h-[193px] xl:h-[220px] h-[247px] 2xl:h-[248px] 3xl:h-[297px] rounded-radius16 w-[100%]"
                    compId="15:1073"
                    comWidth={509}
                    comHeight={247}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <Image
                      src={"images/img_placehpolder.png"}
                      className="absolute lg:h-[193px] xl:h-[220px] h-[247px] 2xl:h-[248px] 3xl:h-[297px] inset-[0] object-cover rounded-radius16 w-[100%]"
                      compId="15:1075"
                      comWidth={509}
                      comHeight={247}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Placehpolder"
                    />
                  </Stack>
                </Column>
                <Row
                  className="items-center justify-start lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] pb-[1px] pl-[1px] pt-[1.67px] 2xl:pt-[1px] xl:pt-[1px] lg:pt-[1px] 3xl:pt-[2px] w-[83%]"
                  compId="15:1076"
                  comWidth={423}
                  comHeight={18}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_vector_27.png"}
                    className="lg:h-[12px] h-[14.81px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] my-[0] object-contain lg:w-[11px] xl:w-[13px] w-[14.81px] 2xl:w-[14px] 3xl:w-[17px]"
                    compId="I15:1078;3:374"
                    comWidth={14.81}
                    comHeight={14.81}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Text
                    className="font-normal lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] xl:ml-[10px] ml-[11.62px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[9px] my-[1px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
                    compId="15:1079"
                    comWidth={14}
                    comHeight={14}
                    compLeft={11.62}
                    compRight={0}
                    compType="Text"
                  >
                    61
                  </Text>
                  <Image
                    src={"images/img_vector_28.png"}
                    className="lg:h-[10px] h-[12.41px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[15px] 3xl:ml-[102px] lg:ml-[66px] xl:ml-[75px] ml-[85.01px] 2xl:ml-[85px] my-[1px] object-contain w-[4%]"
                    compId="I15:1081;3:377"
                    comWidth={17.98}
                    comHeight={12.41}
                    compLeft={85.01}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Text
                    className="font-normal lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] ml-[10.01px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
                    compId="15:1082"
                    comWidth={14}
                    comHeight={14}
                    compLeft={10.01}
                    compRight={0}
                    compType="Text"
                  >
                    12
                  </Text>
                  <Image
                    src={"images/img_vector_29.png"}
                    className="lg:h-[12px] xl:h-[13px] h-[14.19px] 2xl:h-[15px] 3xl:h-[18px] 3xl:ml-[103px] lg:ml-[67px] xl:ml-[76px] ml-[86.46px] 2xl:ml-[86px] my-[1px] object-contain w-[4%]"
                    compId="I15:1084;3:380"
                    comWidth={15.07}
                    comHeight={14.19}
                    compLeft={86.46}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] ml-[11.47px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] my-[1px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-pink_500 w-[auto]"
                    compId="15:1085"
                    comWidth={25}
                    comHeight={14}
                    compLeft={11.47}
                    compRight={0}
                    compType="Text"
                  >
                    6.2K
                  </Text>
                  <Image
                    src={"images/img_group_12.png"}
                    className="lg:h-[12px] h-[14.77px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] lg:ml-[58px] xl:ml-[67px] ml-[75.5px] 2xl:ml-[75px] 3xl:ml-[90px] my-[1px] object-contain w-[4%]"
                    compId="I15:1087;3:385"
                    comWidth={15}
                    comHeight={14.77}
                    compLeft={75.5}
                    compRight={0}
                    compType="Image"
                    alt="Group"
                  />
                  <Text
                    className="font-normal lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] xl:ml-[10px] ml-[11.5px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] my-[1px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
                    compId="15:1088"
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
          </Column>
          <Text
            className="font-helveticaneue font-medium lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-blue_500 w-[auto]"
            compId="15:1090"
            comWidth={93}
            comHeight={14}
            compLeft={59}
            compRight={0}
            compType="Text"
          >
            Show this thread
          </Text>
          <Column
            className="items-center lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] w-[100%]"
            compId="120"
            comWidth={568}
            comHeight={749}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <List
              className="gap-[0] min-h-[auto] w-[100%]"
              compId="111"
              comWidth={568}
              comHeight={749}
              compLeft={0}
              compRight={0}
              compType="List"
              orientation="vertical"
            >
              <Row
                className="items-start justify-between xl:my-[11px] my-[12.5px] 2xl:my-[12px] 3xl:my-[15px] lg:my-[9px] w-[100%]"
                compId="15:1096"
                comWidth={568}
                comHeight={362}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_profilepicture_19.png"}
                  className="lg:h-[39px] xl:h-[44px] h-[49px] 2xl:h-[50px] 3xl:h-[59px] lg:mb-[239px] xl:mb-[273px] mb-[308px] 3xl:mb-[369px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] object-contain rounded-radius50 w-[auto]"
                  compId="15:1098"
                  comWidth={49}
                  comHeight={49}
                  compLeft={0}
                  compRight={0}
                  compType="CircleImage"
                  alt="ProfilePicture"
                />
                <Column
                  className="items-start justify-start xl:pt-[3px] lg:pt-[3px] pt-[4px] w-[90%]"
                  compId="15:1099"
                  comWidth={509}
                  comHeight={362}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-center xl:pr-[5px] lg:pr-[5px] pr-[6.57px] 2xl:pr-[6px] 3xl:pr-[7px] w-[100%]"
                    compId="123"
                    comWidth={509}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-center justify-between w-[100%]"
                      compId="15:1116"
                      comWidth={502.43}
                      comHeight={19}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Row
                        className="items-center justify-evenly w-[52%]"
                        compId="115"
                        comWidth={263}
                        comHeight={19}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold font-helveticaneue lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_901 w-[auto]"
                          compId="15:1117"
                          comWidth={143}
                          comHeight={19}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Darlene Robertson
                        </Text>
                        <Text
                          className="font-helveticaneue1 font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]"
                          compId="15:1118"
                          comWidth={71}
                          comHeight={19}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          @johndue
                        </Text>
                        <Text
                          className="font-normal font-sfcompactdisplay my-[1px] not-italic lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-bluegray_600 w-[auto]"
                          compId="15:1119"
                          comWidth={4}
                          comHeight={18}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          ·
                        </Text>
                        <Text
                          className="font-helveticaneue1 font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]"
                          compId="15:1120"
                          comWidth={31}
                          comHeight={19}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          23s
                        </Text>
                      </Row>
                      <Image
                        src={"images/img_group544_18.png"}
                        className="h-[1.73px] 2xl:h-[2px] xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9.14px] 2xl:mb-[9px] lg:mt-[6px] xl:mt-[7px] mt-[8.13px] 2xl:mt-[8px] 3xl:mt-[9px] object-contain w-[3%]"
                        compId="15:1122"
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
                    className="font-helveticaneue1 font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_800 w-[auto]"
                    compId="15:1100"
                    comWidth={227}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    All set for new house warming..!
                  </Text>
                  <Column
                    className="items-center xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[100%]"
                    compId="124"
                    comWidth={509}
                    comHeight={247}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Image
                      src={"images/img_placehpolder_1.png"}
                      className="lg:h-[193px] xl:h-[220px] h-[247px] 2xl:h-[248px] 3xl:h-[297px] object-cover rounded-radius16 w-[100%]"
                      compId="15:1101"
                      comWidth={509}
                      comHeight={247}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Placehpolder"
                    />
                  </Column>
                  <Row
                    className="font-helveticaneue1 items-center justify-start lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] pl-[1px] py-[1px] w-[83%]"
                    compId="15:1102"
                    comWidth={424}
                    comHeight={18}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_vector_30.png"}
                      className="lg:h-[12px] h-[14.81px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] my-[1px] object-contain lg:w-[11px] xl:w-[13px] w-[14.81px] 2xl:w-[14px] 3xl:w-[17px]"
                      compId="I15:1104;3:374"
                      comWidth={14.81}
                      comHeight={14.81}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Vector"
                    />
                    <Text
                      className="font-normal xl:ml-[10px] ml-[11.62px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[9px] lg:text-[10px] xl:text-[11px] text-[13px] 3xl:text-[15px] text-bluegray_600 w-[auto]"
                      compId="15:1105"
                      comWidth={15}
                      comHeight={16}
                      compLeft={11.62}
                      compRight={0}
                      compType="Text"
                    >
                      61
                    </Text>
                    <Image
                      src={"images/img_vector_31.png"}
                      className="lg:h-[10px] h-[12.41px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[15px] mb-[1.67px] 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] ml-[84.01px] 2xl:ml-[84px] mt-[1.92px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] 3xl:my-[2px] object-contain w-[4%]"
                      compId="I15:1107;3:377"
                      comWidth={17.98}
                      comHeight={12.41}
                      compLeft={84.01}
                      compRight={0}
                      compType="Image"
                      alt="Vector"
                    />
                    <Text
                      className="font-normal ml-[10.01px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[11px] text-[13px] 3xl:text-[15px] text-bluegray_600 w-[auto]"
                      compId="15:1108"
                      comWidth={15}
                      comHeight={16}
                      compLeft={10.01}
                      compRight={0}
                      compType="Text"
                    >
                      12
                    </Text>
                    <Image
                      src={"images/img_vector_32.png"}
                      className="lg:h-[12px] xl:h-[13px] h-[14.19px] 2xl:h-[15px] 3xl:h-[18px] 3xl:ml-[102px] lg:ml-[66px] xl:ml-[76px] ml-[85.46px] 2xl:ml-[85px] my-[1px] object-contain w-[4%]"
                      compId="I15:1110;3:380"
                      comWidth={15.07}
                      comHeight={14.19}
                      compLeft={85.46}
                      compRight={0}
                      compType="Image"
                      alt="Vector"
                    />
                    <Text
                      className="font-normal xl:ml-[10px] ml-[11.47px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] lg:text-[10px] xl:text-[11px] text-[13px] 3xl:text-[15px] text-pink_500 w-[auto]"
                      compId="15:1111"
                      comWidth={27}
                      comHeight={16}
                      compLeft={11.47}
                      compRight={0}
                      compType="Text"
                    >
                      6.2K
                    </Text>
                    <Image
                      src={"images/img_group_13.png"}
                      className="lg:h-[12px] h-[14.77px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] lg:ml-[57px] xl:ml-[65px] ml-[73.5px] 2xl:ml-[73px] 3xl:ml-[88px] my-[1px] object-contain w-[4%]"
                      compId="I15:1113;3:385"
                      comWidth={15}
                      comHeight={14.77}
                      compLeft={73.5}
                      compRight={0}
                      compType="Image"
                      alt="Group"
                    />
                    <Text
                      className="font-normal xl:ml-[10px] ml-[11.5px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] lg:text-[10px] xl:text-[11px] text-[13px] 3xl:text-[15px] text-bluegray_600 w-[auto]"
                      compId="15:1114"
                      comWidth={15}
                      comHeight={16}
                      compLeft={11.5}
                      compRight={0}
                      compType="Text"
                    >
                      61
                    </Text>
                  </Row>
                  <Text
                    className="font-helveticaneue font-medium lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-blue_500 w-[auto]"
                    compId="15:1115"
                    comWidth={93}
                    comHeight={14}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Show this thread
                  </Text>
                </Column>
              </Row>
              <Row
                className="items-start justify-between xl:my-[11px] my-[12.5px] 2xl:my-[12px] 3xl:my-[15px] lg:my-[9px] w-[100%]"
                compId="15:1126"
                comWidth={568}
                comHeight={362}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_profilepicture_20.png"}
                  className="lg:h-[39px] xl:h-[44px] h-[49px] 2xl:h-[50px] 3xl:h-[59px] lg:mb-[239px] xl:mb-[273px] mb-[308px] 3xl:mb-[369px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] object-contain rounded-radius50 w-[auto]"
                  compId="15:1128"
                  comWidth={49}
                  comHeight={49}
                  compLeft={0}
                  compRight={0}
                  compType="CircleImage"
                  alt="ProfilePicture"
                />
                <Column
                  className="items-start justify-start xl:pt-[3px] lg:pt-[3px] pt-[4px] w-[90%]"
                  compId="15:1129"
                  comWidth={509}
                  comHeight={362}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-center xl:pr-[5px] lg:pr-[5px] pr-[6.57px] 2xl:pr-[6px] 3xl:pr-[7px] w-[100%]"
                    compId="125"
                    comWidth={509}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-center justify-between w-[100%]"
                      compId="15:1133"
                      comWidth={502.43}
                      comHeight={19}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Row
                        className="items-center justify-evenly w-[51%]"
                        compId="116"
                        comWidth={258}
                        comHeight={19}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold font-helveticaneue lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_901 w-[auto]"
                          compId="15:1134"
                          comWidth={143}
                          comHeight={19}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Darlene Robertson
                        </Text>
                        <Text
                          className="font-helveticaneue1 font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]"
                          compId="15:1135"
                          comWidth={71}
                          comHeight={19}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          @johndue
                        </Text>
                        <Text
                          className="font-normal font-sfcompactdisplay my-[1px] not-italic lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-bluegray_600 w-[auto]"
                          compId="15:1136"
                          comWidth={4}
                          comHeight={18}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          ·
                        </Text>
                        <Text
                          className="font-helveticaneue1 font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]"
                          compId="15:1137"
                          comWidth={26}
                          comHeight={19}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          23s
                        </Text>
                      </Row>
                      <Image
                        src={"images/img_group544_19.png"}
                        className="h-[1.73px] 2xl:h-[2px] xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9.14px] 2xl:mb-[9px] lg:mt-[6px] xl:mt-[7px] mt-[8.13px] 2xl:mt-[8px] 3xl:mt-[9px] object-contain w-[3%]"
                        compId="15:1139"
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
                    className="font-helveticaneue1 font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_800 w-[auto]"
                    compId="15:1131"
                    comWidth={145}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Tom is in a big hurry.
                  </Text>
                  <Column
                    className="items-center xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[100%]"
                    compId="126"
                    comWidth={509}
                    comHeight={247}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Image
                      src={"images/img_placehpolder_2.png"}
                      className="lg:h-[193px] xl:h-[220px] h-[247px] 2xl:h-[248px] 3xl:h-[297px] object-cover rounded-radius16 w-[100%]"
                      compId="15:1132"
                      comWidth={509}
                      comHeight={247}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Placehpolder"
                    />
                  </Column>
                  <Row
                    className="font-helveticaneue1 items-center justify-start lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] pl-[1px] py-[1px] w-[83%]"
                    compId="15:1143"
                    comWidth={424}
                    comHeight={18}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_vector_33.png"}
                      className="lg:h-[12px] h-[14.81px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] my-[1px] object-contain lg:w-[11px] xl:w-[13px] w-[14.81px] 2xl:w-[14px] 3xl:w-[17px]"
                      compId="I15:1145;3:374"
                      comWidth={14.81}
                      comHeight={14.81}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Vector"
                    />
                    <Text
                      className="font-normal xl:ml-[10px] ml-[11.62px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[9px] lg:text-[10px] xl:text-[11px] text-[13px] 3xl:text-[15px] text-bluegray_600 w-[auto]"
                      compId="15:1146"
                      comWidth={15}
                      comHeight={16}
                      compLeft={11.62}
                      compRight={0}
                      compType="Text"
                    >
                      61
                    </Text>
                    <Image
                      src={"images/img_vector_34.png"}
                      className="lg:h-[10px] h-[12.41px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[15px] mb-[1.67px] 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] ml-[84.01px] 2xl:ml-[84px] mt-[1.92px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] 3xl:my-[2px] object-contain w-[4%]"
                      compId="I15:1148;3:377"
                      comWidth={17.98}
                      comHeight={12.41}
                      compLeft={84.01}
                      compRight={0}
                      compType="Image"
                      alt="Vector"
                    />
                    <Text
                      className="font-normal ml-[10.01px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[11px] text-[13px] 3xl:text-[15px] text-bluegray_600 w-[auto]"
                      compId="15:1149"
                      comWidth={15}
                      comHeight={16}
                      compLeft={10.01}
                      compRight={0}
                      compType="Text"
                    >
                      12
                    </Text>
                    <Image
                      src={"images/img_vector_35.png"}
                      className="lg:h-[12px] xl:h-[13px] h-[14.19px] 2xl:h-[15px] 3xl:h-[18px] 3xl:ml-[102px] lg:ml-[66px] xl:ml-[76px] ml-[85.46px] 2xl:ml-[85px] my-[1px] object-contain w-[4%]"
                      compId="I15:1151;3:380"
                      comWidth={15.07}
                      comHeight={14.19}
                      compLeft={85.46}
                      compRight={0}
                      compType="Image"
                      alt="Vector"
                    />
                    <Text
                      className="font-normal xl:ml-[10px] ml-[11.47px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] lg:text-[10px] xl:text-[11px] text-[13px] 3xl:text-[15px] text-pink_500 w-[auto]"
                      compId="15:1152"
                      comWidth={27}
                      comHeight={16}
                      compLeft={11.47}
                      compRight={0}
                      compType="Text"
                    >
                      6.2K
                    </Text>
                    <Image
                      src={"images/img_group_14.png"}
                      className="lg:h-[12px] h-[14.77px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] lg:ml-[57px] xl:ml-[65px] ml-[73.5px] 2xl:ml-[73px] 3xl:ml-[88px] my-[1px] object-contain w-[4%]"
                      compId="I15:1154;3:385"
                      comWidth={15}
                      comHeight={14.77}
                      compLeft={73.5}
                      compRight={0}
                      compType="Image"
                      alt="Group"
                    />
                    <Text
                      className="font-normal xl:ml-[10px] ml-[11.5px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] lg:text-[10px] xl:text-[11px] text-[13px] 3xl:text-[15px] text-bluegray_600 w-[auto]"
                      compId="15:1155"
                      comWidth={15}
                      comHeight={16}
                      compLeft={11.5}
                      compRight={0}
                      compType="Text"
                    >
                      61
                    </Text>
                  </Row>
                  <Text
                    className="font-helveticaneue font-medium lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-blue_500 w-[auto]"
                    compId="15:1130"
                    comWidth={93}
                    comHeight={14}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Show this thread
                  </Text>
                </Column>
              </Row>
            </List>
          </Column>
        </Column>
        <Column
          className="absolute h-[max-content] inset-y-[0] justify-start left-[6%] my-[auto] lg:pt-[11px] xl:pt-[12px] pt-[14.44px] 2xl:pt-[14px] 3xl:pt-[17px] w-[18%]"
          compId="15:1156"
          comWidth={255}
          comHeight={1032}
          compLeft={86}
          compRight={0}
          compType="Column"
        >
          <Column
            className="items-start justify-start ml-[11.12px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[65%]"
            compId="107"
            comWidth={164.88}
            comHeight={502}
            compLeft={11.12}
            compRight={0}
            compType="Column"
          >
            <Image
              src={"images/img_vector_36.png"}
              className="lg:h-[18px] xl:h-[21px] h-[23.07px] 2xl:h-[24px] 3xl:h-[28px] ml-[1px] object-contain w-[17%]"
              compId="I15:1159;3:143"
              comWidth={28.38}
              comHeight={23.07}
              compLeft={0.05}
              compRight={0}
              compType="Image"
              alt="Vector"
            />
            <Row
              className="items-start justify-start lg:mt-[25px] xl:mt-[29px] mt-[32.71px] 2xl:mt-[32px] 3xl:mt-[39px] w-[64%]"
              compId="15:1161"
              comWidth={105.88}
              comHeight={25.78}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_vector_37.png"}
                className="lg:h-[20px] xl:h-[23px] h-[25.31px] 2xl:h-[26px] 3xl:h-[31px] mb-[1px] object-contain w-[26%]"
                compId="I15:1161;3:292;3:97"
                comWidth={27.75}
                comHeight={25.31}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-bold lg:ml-[16px] xl:ml-[18px] ml-[21.13px] 2xl:ml-[21px] 3xl:ml-[25px] mt-[1.78px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]"
                compId="I15:1161;3:293"
                comWidth={57}
                comHeight={24}
                compLeft={21.13}
                compRight={0}
                compType="Text"
              >
                Home
              </Text>
            </Row>
            <Row
              className="items-start justify-start ml-[1.69px] 2xl:ml-[1px] xl:ml-[1px] lg:ml-[1px] 3xl:ml-[2px] lg:mt-[27px] xl:mt-[30px] mt-[34.81px] 2xl:mt-[34px] 3xl:mt-[41px] w-[72%]"
              compId="15:1162"
              comWidth={118.19}
              comHeight={24.37}
              compLeft={1.69}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_vector_38.png"}
                className="lg:h-[19px] xl:h-[22px] h-[24.37px] 2xl:h-[25px] 3xl:h-[30px] object-contain w-[21%]"
                compId="I15:1162;4:773;1:11"
                comWidth={24.38}
                comHeight={24.37}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-medium lg:ml-[17px] xl:ml-[20px] ml-[22.81px] 2xl:ml-[22px] 3xl:ml-[27px] my-[1px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_901 w-[auto]"
                compId="I15:1162;4:774"
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
              compId="127"
              comWidth={164.88}
              comHeight={25.06}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-start justify-start w-[100%]"
                compId="15:1163"
                comWidth={163.5}
                comHeight={25.06}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_vector_39.png"}
                  className="lg:h-[20px] xl:h-[23px] h-[25.06px] 2xl:h-[26px] 3xl:h-[31px] object-contain w-[15%]"
                  compId="I15:1163;4:773;1:14"
                  comWidth={25}
                  comHeight={25.06}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-medium lg:ml-[17px] xl:ml-[20px] ml-[22.5px] 2xl:ml-[22px] 3xl:ml-[27px] my-[1px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_901 w-[auto]"
                  compId="I15:1163;4:774"
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
              compId="15:1164"
              comWidth={140.5}
              comHeight={23.23}
              compLeft={1.38}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_vector_40.png"}
                className="lg:h-[18px] xl:h-[21px] h-[22.5px] 2xl:h-[23px] 3xl:h-[28px] mb-[1px] object-contain w-[18%]"
                compId="I15:1164;4:773;1:5"
                comWidth={25}
                comHeight={22.5}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-medium lg:ml-[17px] xl:ml-[20px] ml-[22.5px] 2xl:ml-[22px] 3xl:ml-[27px] mt-[1px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_901 w-[auto]"
                compId="I15:1164;4:774"
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
              compId="15:1165"
              comWidth={150.81}
              comHeight={25.38}
              compLeft={3.07}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_vector_41.png"}
                className="lg:h-[20px] xl:h-[23px] h-[25.19px] 2xl:h-[26px] 3xl:h-[31px] mt-[1px] object-contain w-[14%]"
                compId="I15:1165;4:773;1:17"
                comWidth={21.62}
                comHeight={25.19}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-medium lg:mb-[1px] mb-[2.38px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] lg:ml-[18px] xl:ml-[21px] ml-[24.19px] 2xl:ml-[24px] 3xl:ml-[29px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_901 w-[auto]"
                compId="I15:1165;4:774"
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
              compId="15:1166"
              comWidth={90.5}
              comHeight={25}
              compLeft={1.38}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_group_15.png"}
                className="lg:h-[20px] xl:h-[23px] h-[25px] 2xl:h-[26px] 3xl:h-[31px] object-contain lg:w-[19px] xl:w-[22px] w-[25px] 3xl:w-[30px]"
                compId="I15:1166;4:773;1:19"
                comWidth={25}
                comHeight={25}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Group"
              />
              <Text
                className="font-medium lg:ml-[17px] xl:ml-[20px] ml-[22.5px] 2xl:ml-[22px] 3xl:ml-[27px] my-[1px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_901 w-[auto]"
                compId="I15:1166;4:774"
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
              compId="15:1167"
              comWidth={104.44}
              comHeight={25.42}
              compLeft={3.44}
              compRight={0}
              compType="Row"
              onClick={handleNavigate13}
            >
              <Image
                src={"images/img_vector_42.png"}
                className="lg:h-[20px] xl:h-[23px] h-[25.42px] 2xl:h-[26px] 3xl:h-[31px] object-contain w-[20%]"
                compId="I15:1167;4:773;1:24"
                comWidth={20.88}
                comHeight={25.42}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-medium mb-[1px] lg:ml-[19px] xl:ml-[21px] ml-[24.56px] 2xl:ml-[24px] 3xl:ml-[29px] mt-[1.93px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_901 w-[auto]"
                compId="I15:1167;4:774"
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
              compId="15:1168"
              comWidth={96.44}
              comHeight={26.88}
              compLeft={0.44}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_group_16.png"}
                className="lg:h-[21px] xl:h-[24px] h-[26.88px] 2xl:h-[27px] 3xl:h-[33px] object-contain lg:w-[20px] xl:w-[23px] w-[26.88px] 2xl:w-[26px] 3xl:w-[32px]"
                compId="I15:1168;4:773;1:26"
                comWidth={26.88}
                comHeight={26.88}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Group"
              />
              <Text
                className="font-medium mb-[1px] lg:ml-[16px] xl:ml-[19px] ml-[21.56px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[1px] mt-[2.44px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_901 w-[auto]"
                compId="I15:1168;4:774"
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
            compId="108"
            comWidth={232.43}
            comHeight={484}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Button
              className="bg-blue_500 font-medium lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius245 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[100%]"
              compId="15:1170"
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
              compId="15:1171"
              comWidth={232.43}
              comHeight={39}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_profilepicture_21.png"}
                className="lg:h-[31px] xl:h-[35px] h-[39px] 2xl:h-[40px] 3xl:h-[47px] object-contain lg:w-[30px] xl:w-[34px] w-[39px] 3xl:w-[46px]"
                compId="I15:1175;4:973"
                comWidth={39}
                comHeight={39}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="ProfilePicture"
              />
              <Column
                className="items-start justify-start mb-[1px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[53%]"
                compId="15:1172"
                comWidth={123}
                comHeight={38}
                compLeft={10}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]"
                  compId="15:1173"
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
                  compId="128"
                  comWidth={123}
                  comHeight={19}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]"
                    compId="15:1174"
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
                src={"images/img_group544_20.png"}
                className="h-[1.73px] 2xl:h-[2px] xl:h-[2px] lg:h-[2px] 3xl:h-[3px] lg:mb-[19px] xl:mb-[22px] mb-[25.14px] 2xl:mb-[25px] 3xl:mb-[30px] lg:ml-[36px] xl:ml-[41px] ml-[46.58px] 2xl:ml-[46px] 3xl:ml-[55px] xl:mt-[10px] mt-[12.13px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] object-contain w-[6%]"
                compId="15:1177"
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
          className="absolute bg-bluegray_50 h-[1px] left-[25%] top-[18%] w-[43%]"
          compId="15:1181"
          comWidth={613}
          comHeight={1}
          compLeft={361}
          compRight={0}
          compType="Line"
        />
        <Column
          className="absolute font-helveticaneue1 items-start justify-start right-[6%] top-[4%] w-[24%]"
          compId="15:1182"
          comWidth={350}
          comHeight={832}
          compLeft={0}
          compRight={86}
          compType="Column"
        >
          <Column
            className="items-center w-[100%]"
            compId="129"
            comWidth={350}
            comHeight={749}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="bg-transparent border-0 font-normal p-[0] lg:pl-[13px] xl:pl-[14px] pl-[16.78px] 2xl:pl-[16px] 3xl:pl-[20px] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_600 text-bluegray_600 tracking-ls1 w-[100%]"
              WrapClassName="2xl:pl-[16px] 3xl:pl-[20px] 3xl:pr-[26px] 3xl:py-[12px] bg-bluegray_50 flex lg:mr-[1px] lg:pl-[13px] lg:pr-[17px] lg:py-[7px] mr-[2px] pl-[16.78px] pr-[22px] py-[10px] rounded-radius195 w-[99%] xl:mr-[1px] xl:pl-[14px] xl:pr-[19px] xl:py-[8px]"
              compId="15:1183"
              comWidth={0}
              comHeight={39}
              compLeft={0}
              compRight={0}
              compType="SearchView"
              name="SearchBar"
              placeholder="Search Twitter"
              prefix={
                <Image
                  src={"images/img_vector_43.png"}
                  className="cursor-pointer w-[15.64px] h-[15.64px] lg:w-[12px] lg:h-[13px] xl:w-[13px] xl:h-[14px] 2xl:w-[15px] 2xl:h-[16px] 3xl:w-[18px] 3xl:h-[19px] my-[auto]"
                  compId="I15:1183;4:334;4:329"
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
                    src={"images/close2.svg"}
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
              compId="15:1184"
              comWidth={350}
              comHeight={440}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_901 tracking-ls1 w-[auto]"
                compId="I15:1184;8:642"
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
                compId="130"
                comWidth={350}
                comHeight={380}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="items-start justify-start lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] pt-[11px] 3xl:pt-[13px] lg:pt-[8px] xl:pt-[9px] w-[100%]"
                  compId="109"
                  comWidth={350}
                  comHeight={380}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="font-helveticaneue1 items-center lg:mr-[10px] xl:mr-[12px] mr-[14px] 3xl:mr-[16px] w-[96%]"
                    compId="131"
                    comWidth={321}
                    comHeight={327}
                    compLeft={0}
                    compRight={14}
                    compType="Column"
                  >
                    <List
                      className="gap-[0] min-h-[auto] w-[100%]"
                      compId="112"
                      comWidth={321}
                      comHeight={327}
                      compLeft={0}
                      compRight={0}
                      compType="List"
                      orientation="vertical"
                    >
                      <Row
                        className="items-start justify-between my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]"
                        compId="I15:1184;8:644"
                        comWidth={321}
                        comHeight={95}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="items-start justify-start w-[73%]"
                          compId="I15:1184;8:644;4:359"
                          comWidth={235}
                          comHeight={95}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Row
                            className="items-center justify-start w-[61%]"
                            compId="I15:1184;8:644;4:347"
                            comWidth={143}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Text
                              className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="I15:1184;8:644;4:344"
                              comWidth={63}
                              comHeight={16}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >
                              COVID19
                            </Text>
                            <Text
                              className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="I15:1184;8:644;4:345"
                              comWidth={4}
                              comHeight={16}
                              compLeft={4}
                              compRight={0}
                              compType="Text"
                            >
                              ·
                            </Text>
                            <Text
                              className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="I15:1184;8:644;4:346"
                              comWidth={68}
                              comHeight={16}
                              compLeft={4}
                              compRight={0}
                              compType="Text"
                            >
                              Last night
                            </Text>
                          </Row>
                          <Column
                            className="font-helveticaneue items-center lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[100%]"
                            compId="132"
                            comWidth={235}
                            comHeight={51}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-bold leading-[normal] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_901 text-left tracking-ls1 w-[100%]"
                              compId="I15:1184;8:644;4:353"
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
                            className="font-helveticaneue1 items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[69%]"
                            compId="I15:1184;8:644;4:348"
                            comWidth={161}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Text
                              className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="I15:1184;8:644;4:349"
                              comWidth={94}
                              comHeight={16}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >
                              Trending with
                            </Text>
                            <Text
                              className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_500 w-[auto]"
                              compId="I15:1184;8:644;4:352"
                              comWidth={63}
                              comHeight={16}
                              compLeft={4}
                              compRight={0}
                              compType="Text"
                            >
                              #covid19
                            </Text>
                          </Row>
                        </Column>
                        <Image
                          src={"images/img_placeholder_6.png"}
                          className="lg:h-[54px] xl:h-[62px] h-[69px] 2xl:h-[70px] 3xl:h-[83px] lg:mb-[20px] xl:mb-[23px] mb-[26px] 3xl:mb-[31px] object-contain w-[22%]"
                          compId="I15:1184;8:644;4:355"
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
                        compId="I15:1184;8:649"
                        comWidth={350}
                        comHeight={1}
                        compLeft={0}
                        compRight={0}
                        compType="Line"
                      />
                      <Row
                        className="items-start justify-between my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]"
                        compId="I15:1184;8:646"
                        comWidth={321}
                        comHeight={95}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="items-start justify-start w-[73%]"
                          compId="I15:1184;8:646;4:359"
                          comWidth={235}
                          comHeight={95}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Row
                            className="items-center justify-start w-[53%]"
                            compId="I15:1184;8:646;4:347"
                            comWidth={125}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Text
                              className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="I15:1184;8:646;4:344"
                              comWidth={63}
                              comHeight={16}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >
                              US news
                            </Text>
                            <Text
                              className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="I15:1184;8:646;4:345"
                              comWidth={4}
                              comHeight={16}
                              compLeft={4}
                              compRight={0}
                              compType="Text"
                            >
                              ·
                            </Text>
                            <Text
                              className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="I15:1184;8:646;4:346"
                              comWidth={50}
                              comHeight={16}
                              compLeft={4}
                              compRight={0}
                              compType="Text"
                            >
                              4h ago
                            </Text>
                          </Row>
                          <Column
                            className="font-helveticaneue items-center lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[100%]"
                            compId="133"
                            comWidth={235}
                            comHeight={51}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-bold leading-[normal] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_901 text-left tracking-ls1 w-[100%]"
                              compId="I15:1184;8:646;4:353"
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
                            className="font-helveticaneue1 items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[64%]"
                            compId="I15:1184;8:646;4:348"
                            comWidth={150}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Text
                              className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="I15:1184;8:646;4:349"
                              comWidth={94}
                              comHeight={16}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >
                              Trending with
                            </Text>
                            <Text
                              className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_500 w-[auto]"
                              compId="I15:1184;8:646;4:352"
                              comWidth={52}
                              comHeight={16}
                              compLeft={4}
                              compRight={0}
                              compType="Text"
                            >
                              #trump
                            </Text>
                          </Row>
                        </Column>
                        <Image
                          src={"images/img_placeholder_7.png"}
                          className="lg:h-[54px] xl:h-[62px] h-[69px] 2xl:h-[70px] 3xl:h-[83px] lg:mb-[20px] xl:mb-[23px] mb-[26px] 3xl:mb-[31px] object-contain w-[22%]"
                          compId="I15:1184;8:646;4:355"
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
                        compId="I15:1184;8:649"
                        comWidth={350}
                        comHeight={1}
                        compLeft={0}
                        compRight={0}
                        compType="Line"
                      />
                      <Row
                        className="items-start justify-between my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]"
                        compId="I15:1184;8:648"
                        comWidth={321}
                        comHeight={95}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="items-start justify-start w-[73%]"
                          compId="I15:1184;8:648;4:359"
                          comWidth={235}
                          comHeight={95}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Row
                            className="items-center justify-start w-[39%]"
                            compId="I15:1184;8:648;4:347"
                            comWidth={92}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Text
                              className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="I15:1184;8:648;4:344"
                              comWidth={33}
                              comHeight={16}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >
                              India
                            </Text>
                            <Text
                              className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="I15:1184;8:648;4:345"
                              comWidth={4}
                              comHeight={16}
                              compLeft={4}
                              compRight={0}
                              compType="Text"
                            >
                              ·
                            </Text>
                            <Text
                              className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="I15:1184;8:648;4:346"
                              comWidth={47}
                              comHeight={16}
                              compLeft={4}
                              compRight={0}
                              compType="Text"
                            >
                              1h ago
                            </Text>
                          </Row>
                          <Column
                            className="font-helveticaneue items-center lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[100%]"
                            compId="134"
                            comWidth={235}
                            comHeight={51}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-bold leading-[normal] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_901 text-left tracking-ls1 w-[100%]"
                              compId="I15:1184;8:648;4:353"
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
                            className="font-helveticaneue1 items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[61%]"
                            compId="I15:1184;8:648;4:348"
                            comWidth={144}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Text
                              className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="I15:1184;8:648;4:349"
                              comWidth={94}
                              comHeight={16}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >
                              Trending with
                            </Text>
                            <Text
                              className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_500 w-[auto]"
                              compId="I15:1184;8:648;4:352"
                              comWidth={46}
                              comHeight={16}
                              compLeft={4}
                              compRight={0}
                              compType="Text"
                            >
                              #sport
                            </Text>
                          </Row>
                        </Column>
                        <Image
                          src={"images/img_placeholder_8.png"}
                          className="lg:h-[54px] xl:h-[62px] h-[69px] 2xl:h-[70px] 3xl:h-[83px] lg:mb-[20px] xl:mb-[23px] mb-[26px] 3xl:mb-[31px] object-contain w-[22%]"
                          compId="I15:1184;8:648;4:355"
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
                    compId="I15:1184;8:651"
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
              className="bg-gray_50 font-helveticaneue items-start justify-start lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] lg:pb-[11px] xl:pb-[13px] pb-[15px] 3xl:pb-[18px] pt-[11px] 3xl:pt-[13px] lg:pt-[8px] xl:pt-[9px] rounded-radius16 w-[100%]"
              compId="15:1185"
              comWidth={350}
              comHeight={232}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_901 w-[auto]"
                compId="I15:1185;8:962"
                comWidth={132}
                comHeight={24}
                compLeft={16}
                compRight={0}
                compType="Text"
              >
                Who to follow
              </Text>
              <Column
                className="items-center mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]"
                compId="135"
                comWidth={350}
                comHeight={172}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="items-start justify-start w-[100%]"
                  compId="110"
                  comWidth={350}
                  comHeight={172}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-center w-[100%]"
                    compId="136"
                    comWidth={350}
                    comHeight={141}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Line
                      className="bg-bluegray_50 h-[1px] w-[100%]"
                      compId="I15:1185;8:963"
                      comWidth={350}
                      comHeight={1}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                    <Stack
                      className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]"
                      compId="I15:1185;8:964;4:480"
                      comWidth={350}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Stack
                        className="absolute lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] right-[5%] top-[10%] w-[74%]"
                        compId="105"
                        comWidth={259}
                        comHeight={38}
                        compLeft={0}
                        compRight={16}
                        compType="Stack"
                      >
                        <Text
                          className="absolute font-bold left-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_901 top-[0] w-[auto]"
                          compId="I15:1185;8:964;4:464"
                          comWidth={112}
                          comHeight={19}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Bessie Cooper
                        </Text>
                        <Stack
                          className="absolute bottom-[0] lg:h-[27px] xl:h-[31px] h-[34px] 2xl:h-[35px] 3xl:h-[41px] w-[100%]"
                          compId="92"
                          comWidth={259}
                          comHeight={34}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Text
                            className="absolute bottom-[0] font-helveticaneue1 font-normal left-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]"
                            compId="I15:1185;8:964;4:465"
                            comWidth={191}
                            comHeight={19}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            @alessandroveronezi
                          </Text>
                          <Button
                            className="absolute bg-gray_900 font-bold font-helveticaneue xl:py-[4px] lg:py-[4px] py-[5.5px] 2xl:py-[5px] 3xl:py-[6px] right-[0] rounded-radius15 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 top-[0] w-[31%]"
                            compId="I15:1185;8:964;4:478"
                            comWidth={80}
                            comHeight={30}
                            compLeft={0}
                            compRight={0}
                            compType="Button"
                          >
                            Follow
                          </Button>
                        </Stack>
                      </Stack>
                      <Column
                        className="absolute lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-start left-[5%] rounded-radius50 top-[2%] lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                        compId="I15:1185;8:964;4:467"
                        comWidth={48}
                        comHeight={48}
                        compLeft={16}
                        compRight={0}
                        compType="Column"
                      >
                        <Image
                          src={"images/img_profilepicture_22.png"}
                          className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-cover rounded-radius50 w-[auto]"
                          compId="I15:1185;8:964;4:467;4:986"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="CircleImage"
                          alt="ProfilePicture"
                        />
                      </Column>
                      <Line
                        className="absolute bg-bluegray_50 bottom-[0] h-[1px] w-[100%]"
                        compId="I15:1185;8:964;4:482"
                        comWidth={350}
                        comHeight={1}
                        compLeft={0}
                        compRight={0}
                        compType="Line"
                      />
                    </Stack>
                    <Row
                      className="items-center justify-between mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] w-[91%]"
                      compId="103"
                      comWidth={318}
                      comHeight={48}
                      compLeft={16}
                      compRight={16}
                      compType="Row"
                    >
                      <Column
                        className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                        compId="I15:1185;8:965;4:467"
                        comWidth={48}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Image
                          src={"images/img_profilepicture_23.png"}
                          className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-cover rounded-radius50 w-[auto]"
                          compId="I15:1185;8:965;4:467;4:986"
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
                        compId="102"
                        comWidth={149}
                        comHeight={38}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-bold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_901 w-[auto]"
                          compId="I15:1185;8:965;4:464"
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
                          compId="137"
                          comWidth={149}
                          comHeight={19}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]"
                            compId="I15:1185;8:965;4:465"
                            comWidth={149}
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
                        className="bg-gray_900 font-bold 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] xl:py-[4px] lg:py-[4px] py-[5.5px] 2xl:py-[5px] 3xl:py-[6px] rounded-radius15 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[25%]"
                        compId="I15:1185;8:965;4:478"
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
                      className="bg-bluegray_50 h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]"
                      compId="I15:1185;8:965;4:482"
                      comWidth={350}
                      comHeight={1}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                  </Column>
                  <Text
                    className="font-medium lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_500 w-[auto]"
                    compId="I15:1185;8:967"
                    comWidth={74}
                    comHeight={16}
                    compLeft={15}
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
            compId="96"
            comWidth={264}
            comHeight={14}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-normal xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
              compId="15:1188"
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
              compId="15:1192"
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
              compId="15:1193"
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
            compId="99"
            comWidth={187}
            comHeight={14}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-normal xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
              compId="15:1189"
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
              compId="15:1190"
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
              compId="15:1191"
              comWidth={28}
              comHeight={14}
              compLeft={12}
              compRight={0}
              compType="Text"
            >
              More
            </Text>
            <Image
              src={"images/img_group544_21.png"}
              className="h-[1.25px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] xl:h-[2px] mb-[6.37px] lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] mt-[6.38px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[5%]"
              compId="15:1195"
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
            compId="15:1199"
            comWidth={108}
            comHeight={14}
            compLeft={1}
            compRight={0}
            compType="Row"
          >
            <Image
              src={"images/img_vector_44.png"}
              className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] xl:my-[1px] lg:my-[1px] my-[2px] object-contain w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"
              compId="I15:1200;120:720"
              comWidth={10}
              comHeight={10}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="Vector"
            />
            <Text
              className="font-normal lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]"
              compId="15:1201"
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
    </>
  );
};

export default TwitterFeedPage;
