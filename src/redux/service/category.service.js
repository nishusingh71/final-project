import {
    collection,
    addDoc,
    getDocs
} from "firebase/firestore";
import {
    db
} from "../../firebase-config";

let collectionName = "categories"

export const getCategoryFromAPI = async () => {
    let categories = [];

    const querySnapshot = await getDocs(collection(db, collectionName));
    
    querySnapshot.forEach((doc) => {
        let category = doc.data();
        category.id = doc.id;

        categories.push(category)
    });

    return categories;
}

export const addCategoryToAPI = async (category) => {
    const docRef = await addDoc(collection(db, collectionName), category);
    console.log("Document written with ID: ", docRef.id);
}