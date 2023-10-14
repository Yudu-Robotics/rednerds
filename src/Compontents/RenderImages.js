import award1 from "../Assets/Images/imags/Group 23.png";
import award2 from "../Assets/Images/imags/Group 26.png";
import award3 from "../Assets/Images/imags/Group 41.png";
import group18 from "../Assets/Images/imags/Group 18.png";
import group20 from "../Assets/Images/imags/Group 20.png";
import group19 from "../Assets/Images/imags/Group 19.png";
import grid2 from "../Assets/Images/imags/Grid2.png";
import group684 from "../Assets/Images/imags/Group 684.png";
import group683 from "../Assets/Images/imags/Group 683.png";
import group694 from "../Assets/Images/imags/Group 694.svg";
import group702 from "../Assets/Images/imags/Group 702.png";
import group683a from "../Assets/Images/imags/Group 683a.png";

//mob images
import group695 from "../Assets/Images/imags/Group 695.png";

//product image
import cad from "../Assets/Images/imags/products/design.png";
import prototyp from "../Assets/Images/imags/products/dimension.png";
import pcb from "../Assets/Images/imags/products/pcb-board.png";
import molding from "../Assets/Images/imags/products/injection.png";
import print3d from "../Assets/Images/imags/products/3d-printing.png";
import laserCut from "../Assets/Images/imags/products/laser-cutting-machine.png";
import packing from "../Assets/Images/imags/products/package.png";

//logo
import biboxlabLogo from "../Assets/Images/imags/biboxlab-logo.png";
import tessolLogo from "../Assets/Images/imags/Tessol-Logo-01.png";
import thinkTacLogo from "../Assets/Images/imags/ThinkTac_Logo.png";
import c14Logo from "../Assets/Images/imags/i4c_white.png";


function renderImage(imageName) {
    switch (imageName) {
        case "award1":
            return award1;
        case "award2":
            return award2;
        case "award3":
            return award3;
        case "group18":
            return group18;
        case "group20":
            return group20;
        case "group19":
            return group19;
        case "grid2":
            return grid2;
        case "group684":
            return group684;
        case "group683":
            return group683;
        case "cad":
            return cad;
        case "prototyp":
            return prototyp;
        case "pcb":
            return pcb;
        case "molding":
            return molding;
        case "print3d":
            return print3d;
        case "laserCut":
            return laserCut;
        case "packing":
            return packing;
        case "biboxlabLogo":
            return biboxlabLogo;
        case "tessolLogo":
            return tessolLogo;
        case "thinkTacLogo":
            return thinkTacLogo;
        case "c14Logo":
            return c14Logo;
        case "group694":
            return group694;
        case "group695":
            return group695;
        case "group702":
            return group702;
        case "group683a":
            return group683a;

    }
}
export default renderImage;