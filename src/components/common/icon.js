// to add new icon -> https://react-icons.github.io/

import {
    FiSlash,
    FiChevronDown,
    FiChevronLeft,
    FiChevronRight,
    FiChevronUp,
    FiSearch,
    FiLogIn,
    FiLogOut,
    FiImage
} from "react-icons/fi";
import {
    MdOutlineLocalGroceryStore,
    MdAdd,
    MdCheck,
    MdHomeRepairService,
    MdMenu,
    MdClose,
    MdBorderColor,
    MdOutlineUpdate,
    MdMedicalServices,
    MdContactSupport
} from "react-icons/md";
import {
    FaStar,
    FaLock,
    FaFacebook,
    FaInstagramSquare,
    FaJediOrder,
    FaBoxOpen,
    FaUsers
} from "react-icons/fa";
import { BiMailSend, BiUser } from "react-icons/bi";
import { GiCctvCamera, GiLockedHeart } from "react-icons/gi";
import { BsFire } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { IoBookmarkOutline, IoBookmarkSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

export function Icon({ type, style, size }) {
    const _style = style || "";
    const _size = size || 20;
    switch (type) {
        case "image":
            return <FiImage className={_style} size={_size} />
        case "send":
            return <IoIosSend className={_style} size={_size} />
        case "support":
            return <MdContactSupport className={_style} size={_size} />
        case "users":
            return <FaUsers className={_style} size={_size} />;
        case "services":
            return <MdMedicalServices className={_style} size={_size} />;
        case "products":
            return <FaBoxOpen className={_style} size={_size} />;
        case "commands":
            return <FaJediOrder className={_style} size={_size} />;
        case "date":
            return <MdOutlineUpdate className={_style} size={_size} />;
        case "address":
            return <IoLocationSharp className={_style} size={_size} />;
        case "command":
            return <MdBorderColor className={_style} size={_size} />;
        case "phone":
            return <FaPhoneVolume className={_style} size={_size} />;
        case "save":
            return <IoBookmarkOutline className={_style} size={_size} />;
        case "saveFill":
            return <IoBookmarkSharp className={_style} size={_size} />;
        case "facebook":
            return <FaFacebook className={_style} size={_size} />;
        case "instagram":
            return <FaInstagramSquare className={_style} size={_size} />;
        case "whatsapp":
            return <RiWhatsappFill className={_style} size={_size} />;
        case "menu":
            return <MdMenu className={_style} size={_size} />;
        case "close":
            return <MdClose className={_style} size={_size} />;
        case "service":
            return <MdHomeRepairService className={_style} size={_size} />;
        case "camera":
            return <GiCctvCamera className={_style} size={_size} />;
        case "fire":
            return <BsFire className={_style} size={_size} />;
        case "lock":
            return <FaLock className={_style} size={_size} />;
        case "logo":
            return <GiLockedHeart className={_style} size={_size} />;
        case "check":
            return <MdCheck className={_style} size={_size} />;
        case "delete":
            return <MdClose className={_style} size={_size} />;
        case "star":
            return <FaStar className={_style} size={_size} />;
        case "profile":
            return <BiUser className={_style} size={_size} />;
        case "add":
            return <MdAdd className={_style} size={_size} />;
        case "store":
            return <MdOutlineLocalGroceryStore className={_style} size={_size} />;
        case "chevronDown":
            return <FiChevronDown className={_style} size={_size} />;
        case "chevronLeft":
            return <FiChevronLeft className={_style} size={_size} />;
        case "chevronRight":
            return <FiChevronRight className={_style} size={_size} />;
        case "chevronUp":
            return <FiChevronUp className={_style} size={_size} />;
        case "search":
            return <FiSearch className={_style} size={_size} />;
        case "mail":
            return <BiMailSend className={_style} size={_size} />;
        case "signIn":
            return <FiLogIn className={_style} size={_size} />;
        case "signOut":
            return <FiLogOut className={_style} size={_size} />;
    }
    return <FiSlash size={size} className={style} />;
};
