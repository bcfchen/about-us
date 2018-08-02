import React from "react";

const ThumbnailGrid = ({ classes, thumbnailItems, itemClicked }) => {
    const listItems = thumbnailItems.map(thumbnailItem => {
        const itemClass = thumbnailItem.isSelected ? "blurry" : "";
        return <li key={thumbnailItem.id}>
            <img className={itemClass} src={thumbnailItem.img} onClick={() => itemClicked(thumbnailItem)} />
        </li>;
    });

    return (
        <div>
            <ul className="thumbnail-list">
                {listItems}
            </ul>
        </div>
    );
};

export default ThumbnailGrid;