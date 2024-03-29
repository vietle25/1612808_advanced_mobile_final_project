import React, { Component } from 'react'
import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { ErrorCode } from "config/errorCode";
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import FlatListCustom from "components/flatListCustom";
import styles from './styles';
import { Container, Content } from 'native-base';
import Header from 'components/header';
import Utils from 'utils/utils';
import commonStyles from 'styles/commonStyles';
import { Constants } from 'values/constants';
import { Fonts } from 'values/fonts';
import { Colors } from 'values/colors';
import ic_search_white from 'images/ic_search_white.png';
import ic_grid_white from 'images/ic_grid_white.png';
import img_iron_man from 'images/img_iron_man.jpg';
import img_download from 'images/img_download.png';
import img_download_guide_1 from 'images/img_download_guide_1.png';
import img_download_guide_2 from 'images/img_download_guide_2.png';
import Button from 'components/button';

const LIST_MENU = [
    {
        name: 'Profile',
        screen: 'UserProfile',
        value: 1
    },
    {
        name: 'Setting',
        screen: 'Setting',
        value: 2
    }
]
export class DownloadView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: 'Obama'
            }
        }
        this.data = [
            {
                title: 'Software Development', data: [
                    {
                        resource: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg",
                        title: "React-native: from zero to hero",
                        arthur: "Mark Zuckerberg",
                        level: "Beginner",
                        createdAt: 'Feb 2020',
                        long: '3h 45m',
                        rating: { star: 4, count: 512 }
                    },
                    {
                        resource: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg",
                        title: "React-native: from zero to hero",
                        arthur: "Mark Zuckerberg",
                        level: "Beginner",
                        createdAt: 'Feb 2020',
                        long: '3h 45m',
                        rating: { star: 4, count: 512 }
                    },
                    {
                        resource: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg",
                        title: "React-native: from zero to hero",
                        arthur: "Mark Zuckerberg",
                        level: "Beginner",
                        createdAt: 'Feb 2020',
                        long: '3h 45m',
                        rating: { star: 4, count: 512 }
                    },
                    {
                        resource: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg",
                        title: "React-native: from zero to hero",
                        arthur: "Mark Zuckerberg",
                        level: "Beginner",
                        createdAt: 'Feb 2020',
                        long: '3h 45m',
                        rating: { star: 4, count: 512 }
                    },
                    {
                        resource: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg",
                        title: "React-native: from zero to hero",
                        arthur: "Mark Zuckerberg",
                        level: "Beginner",
                        createdAt: 'Feb 2020',
                        long: '3h 45m',
                        rating: { star: 4, count: 512 }
                    },
                ]
            },
            {
                title: 'Software Development', data: [
                    {
                        resource: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg",
                        title: "React-native: from zero to hero",
                        arthur: "Mark Zuckerberg",
                        level: "Beginner",
                        createdAt: 'Feb 2020',
                        long: '3h 45m',
                        rating: { star: 4, count: 512 }
                    },
                    {
                        resource: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg",
                        title: "React-native: from zero to hero",
                        arthur: "Mark Zuckerberg",
                        level: "Beginner",
                        createdAt: 'Feb 2020',
                        long: '3h 45m',
                        rating: { star: 4, count: 512 }
                    },
                    {
                        resource: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg",
                        title: "React-native: from zero to hero",
                        arthur: "Mark Zuckerberg",
                        level: "Beginner",
                        createdAt: 'Feb 2020',
                        long: '3h 45m',
                        rating: { star: 4, count: 512 }
                    },
                    {
                        resource: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg",
                        title: "React-native: from zero to hero",
                        arthur: "Mark Zuckerberg",
                        level: "Beginner",
                        createdAt: 'Feb 2020',
                        long: '3h 45m',
                        rating: { star: 4, count: 512 }
                    },
                    {
                        resource: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg",
                        title: "React-native: from zero to hero",
                        arthur: "Mark Zuckerberg",
                        level: "Beginner",
                        createdAt: 'Feb 2020',
                        long: '3h 45m',
                        rating: { star: 4, count: 512 }
                    },
                ]
            }
        ];
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    renderNotLogin = () => {
        return (
            <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={[commonStyles.text, { fontSize: Fonts.FONT_SIZE_LARGE }]}>Let's get you started</Text>
                <View style={{ marginTop: Constants.MARGIN_XX_LARGE * 2, alignItems: 'center' }}>
                    <Image source={ic_grid_white} />
                    <Text style={[commonStyles.text, { marginTop: Constants.MARGIN_LARGE }]}>Browser new and popular course</Text>
                </View>
                <View style={{ marginTop: Constants.MARGIN_X_LARGE * 3, alignItems: 'center' }}>
                    <Image source={ic_search_white} />
                    <Text style={[commonStyles.text, { marginTop: Constants.MARGIN_LARGE }]}>Search the library</Text>
                </View>
            </View>
        )
    }

    renderListCourses = () => {
        return (
            <View>
                <View style={{ marginBottom: Constants.MARGIN_X_LARGE }}>
                    <Image source={img_iron_man} style={{ width: 120, height: 150, alignSelf: 'flex-end' }} resizeMode={'contain'} />
                    <View style={{ position: 'absolute', bottom: 20, left: 16 }}>
                        <Text style={{ ...commonStyles.text, fontSize: Fonts.FONT_SIZE_MEDIUM }}>Welcome to Pluralsight !</Text>
                        <Text style={{ ...commonStyles.text, fontSize: Fonts.FONT_SIZE_MEDIUM, marginTop: 20, width: Constants.MAX_WIDTH * 0.8 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                    </View>
                </View>
            </View>
        )
    }

    renderList = (title, data) => {
        return (
            <View>
                <View style={styles.titleList}>
                    <Text style={[commonStyles.text, { fontSize: Fonts.FONT_SIZE_LARGE }]}>{title}</Text>
                    <Pressable style={{}} onPress={() => this.props.navigation.navigate('CourseList')}>
                        <Text style={[commonStyles.textSmall]}>{'See all >'}</Text>
                    </Pressable>
                </View>
                <FlatListCustom
                    onRef={(ref) => { this.flatListRef = ref }}
                    contentContainerStyle={{
                    }}
                    style={{
                    }}
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    isShowEmpty={data == 0}
                    isShowImageEmpty={true}
                    textForEmpty={""}
                />
            </View>
        )
    }

    renderItem = (item, index, data) => {
        return (
            <ItemCourse
                key={index}
                index={index}
                item={item}
                horizontal={true}
                length={data.length}
                onPress={() => this.props.navigation.navigate("CourseDetail")}
            />
        )
    }

    renderHeaderDownload = () => {
        return (
            <View>
                <View style={styles.viewHeaderDownload}>
                    <Image source={img_download} style={styles.imgDownload} />
                    <Text style={styles.titleDownload}>Watch your courses download on the go!</Text>
                    <Text style={styles.txtContentDownload}>Download courses so you can continue to skill up-even when you're offline</Text>
                </View>
                <Button
                    onPress={()=>{this.props.navigation.navigate("Search")}}
                    title={"FIND A COURSE TO DOWNLOAD"}
                    titleStyle={{ fontWeight: 'bold', color: Colors.COLOR_WHITE }}
                    backgroundColor={Colors.COLOR_PRIMARY} />
            </View>
        )
    }

    renderDownloadGuide = () => {
        return(
            <View style={styles.viewHowTo}>
                <Text style={styles.txtHowTo}>How to download course</Text>
                <View style={styles.viewDownloadGuide}>
                    <Image source={img_download_guide_1} style={styles.imgDownloadGuide} />
                    <Image source={img_download_guide_2} style={styles.imgDownloadGuide}/>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    title={"Downloads"}
                    visibleBack={false}
                    visibleAccount={true}
                    user={{ name: 'abc', avatar: null }}
                    onBack={() => { }}
                    visibleMenu={true}
                    menus={LIST_MENU}
                    navigation={this.props.navigation}
                />
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    {this.renderHeaderDownload()}
                    {this.renderDownloadGuide()}
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DownloadView)
