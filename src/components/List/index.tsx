import React from "react";

function List() {

    const tasks = [
        {
            taskName: 'ReactJS',
            time: '02:00:00'
        },
        {
            taskName: 'NodeJS',
            time: '01:00:00'
        },
        {
            taskName: 'NextJS',
            time: '00:30:00'
        }
    ]

    return(
        <aside>

            <h4>Studies of the day</h4>

            <ul>
                {
                    tasks.map((task, index) => {
                        return(
                            <li key={index}>
                                <h5>{task.taskName}</h5>
                                <span>{task.time}</span>
                            </li>
                        )
                    })
                }
            </ul>

        </aside>
    )

}

export default List;