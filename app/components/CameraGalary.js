import React, {useState}from 'react';
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";





// const [gpicture, setgPicture] = useState("");
// function picFromGalary() {
//     const {granted} = await Permissions.askAsync(permissions.CAMERA_ROLL);
//     if (granted){
//         let data = await ImagePicker.launchImageLibraryAsync({
//                     mediaTypes:ImagePicker.MediaTypeOptions.Images,
//                     allowsEditing:true,
//                     aspect:[1,1]
//         })
//         setgPicture(data)
//         console.log(data)
//     }
//     else {
//         console.log('Error');
//     }
    
// }
// const [cpicture, setcPicture] = useState("");
const  picFromCamera= async () => {
    const {granted} = await Permissions.askAsync(Permissions.CAMERA)
    if (granted){
        let data = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes:ImagePicker.MediaTypeOptions.Images,
                    allowsEditing:true,
                    aspect:[1,1]
        })
        setcPicture(data)
        console.log(data)

    }
    else{
        console.log("Error");
    }
    
}

// export default picFromGalary;
// export default picFromCamera;