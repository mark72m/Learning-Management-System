import { IsIPAD } from "@/themes/app.constants";
import { Image } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
//@ts-ignore
import One from "@/assets/images/onboarding/1.png";
//@ts-ignore
import Two from "@/assets/images/onboarding/2.png";
//@ts-ignore
import Three from "@/assets/images/onboarding/3.png";

export const onBoardingSlides: onBoardingSlidesTypes[] = [
    {
        color: "#40E0D0",
        title: "Explore",
        image: (
            <Image
                source={One}
                style={{
                    width: IsIPAD ? verticalScale(285) : verticalScale(320),
                    height: IsIPAD ? verticalScale(345) : verticalScale(330),
                }}
            />
        ),
        secondTitle: "Our Community",
        subtitle: "Find the perfect course to enhance your career prospects and skill set",
    },

    {
        color: "#A7FF893",
        title: "Set Your",
        image: (
            <Image
                source={Two}
                style={{
                    width: IsIPAD ? scale(285) : scale(320),
                    height: IsIPAD ? verticalScale(345) : verticalScale(330),
                }}
            />
        ),
        secondTitle: "Own Goal",
        subtitle: "Personalize your study plan with flexible timelines that suit you best",
    },

    {
        color: "#FFC0B0",
        title: "Complete Full",
        image: (
            <Image
                source={Three}
                style={{
                    width: IsIPAD ? scale(285) : scale(320),
                    height: IsIPAD ? verticalScale(345) : verticalScale(330),
                }}
            />
        ),
        secondTitle: "Course",
        subtitle: "Achieve certification by completing courses with dedicated effort",
    }
]