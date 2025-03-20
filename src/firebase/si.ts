import { doc, getDoc } from "firebase/firestore";
import { db } from "./connection";

const userRef = doc(db, "usuarios", "8z8G40lzlaoxwTrCAYFD")

const user = await getDoc(userRef)

const data = await user.data()

