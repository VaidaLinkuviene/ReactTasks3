import React, { useState } from 'react'
import Cards from './Cards';

function Home() {

    let data = [
        {
            id: 1,
            image: "https://www.itprotoday.com/sites/itprotoday.com/files/programming.jpg",
            title: "image1",
            text: "Aš mokausi HTML",
            status: false,
            statusChange: { statusChange }
        },
        {
            id: 2,
            image: "https://spectrum.ieee.org/media-library/graphic-image-opener-for-the-top-programming-languges-introduction-article.jpg?id=25581112&width=1200&coordinates=0%2C77%2C0%2C78&height=600",
            title: "image2",
            text: "Aš mokausi CSS",
            status: false,
            statusChange: { statusChange }
        },
        {
            id: 3,
            image: "https://catalyst-ca.net/wp-content/uploads/2021/12/top-programing-languages.jpeg",
            title: "image3",
            text: "Aš mokausi JS",
            status: false,
            statusChange: { statusChange }
        }
    ]



    const [tasks, setTasks] = useState(data);

    function statusChange(id) {
        const updateTasks = [...tasks];
        updateTasks.forEach((item) => {
            if (item.id == id) {
                item.status = true;
            }
        }
        );
        setTasks(updateTasks);

        // setTasks((previous) => {
        //     return { ...previous, status: true }
        // })
    }

    const list = tasks.map((item) => {
        return (
            < Cards
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                text={item.text}
                status={item.status}
                statusChange={statusChange}
            />
        );
    });



    return (

        <div className='row'>
            {list.length ? list : "Empty"}
        </div>


    )
}

export default Home