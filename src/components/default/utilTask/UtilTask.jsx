import React from 'react';
import css from './UtilTask.module.css';

const UtilTask = (props) => {


    let clickTest = () => {
        // let text = newPostRef.current.value;
        // props.dispatch(addPostCreator());
        // props.addPost()

        console.log('test');
        props.testClick();
    };

    return (
        <div className={css.chrome}>
            <h1>Main article area</h1>
            <p>In this layout, we display the areas in source order for any screen less that 500 pixels wide. We go
                to a two column layout, and then to a three column layout by redefining the grid, and the placement
                of items on the grid.</p>

            <div>
                <button onClick={clickTest}>Add post</button>
            </div>
        </div>

    );
};

export default UtilTask;
