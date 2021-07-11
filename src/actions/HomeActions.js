import db from "../firebase";
import firebase from "firebase";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import { useDispatch } from "react-redux";
import { header } from "../features/home/homeSlice";

const HomeDetails = () => {
    const dispatch = useDispatch();
    const [homeHeaderDetails] = useDocument(
        db
        .collection("home")
        .doc("homeHeaderIntro")
        .collection("homeHeader")
        .doc("info")  
    )
    const shootHeaderToRedux = () => {
        dispatch(header({
            header: homeHeaderDetails?.data().homeHeader
        }))
    }
}

