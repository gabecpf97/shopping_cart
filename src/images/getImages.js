import img1 from "./Awa_Awa_no_Mi_Infobox.png";
import img2 from "./Doru_Doru_no_Mi_Infobox.png";
import img3 from "./Gomu_Gomu_no_Mi_Infobox.png";
import img4 from "./Hana_Hana_no_Mi_Infobox.png";
import img5 from "./Hito_Hito_no_Mi_Infobox.png";
import img6 from "./Mera_Mera_no_Mi_Infobox.png";
import img7 from "./Moku_Moku_no_Mi_Infobox.png";
import img8 from "./Ope_Ope_no_Mi_Infobox.png";
import img9 from "./Ushi_Ushi_no_Mi,_Model_Giraffe_Infobox.png";
import img10 from "./Yami_Yami_no_Mi_Infobox.png";

function getImgaes() {
    const imgArr = [];

    imgArr.push(_imgItem(img1, 'paramecia', 'awa awa'));
    imgArr.push(_imgItem(img2, 'paramecia', 'doru doru'));
    imgArr.push(_imgItem(img3, 'paramecia', 'gomu gomu'));
    imgArr.push(_imgItem(img4, 'paramecia', 'hana hana'));
    imgArr.push(_imgItem(img5, 'zoan', 'hito hito'));
    imgArr.push(_imgItem(img6, 'logia', 'mera mera'));
    imgArr.push(_imgItem(img7, 'logia', 'moku moku'));
    imgArr.push(_imgItem(img8, 'paramecia', 'ope ope'));
    imgArr.push(_imgItem(img9, 'zoan', 'ushi ushi(giraffe)'));
    imgArr.push(_imgItem(img10, 'logia', 'yami yami'));

    return imgArr;
}

function _imgItem(src, theType, theName) {
    return ({
        img: src,
        type: theType,
        name: theName
    });
}

export default getImgaes;