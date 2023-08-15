import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

function Sidebar({ selectedCategory,setSelectedCategory }) {

    return (
        <Stack
            direction="row"
            sx={{
                overflowY: "auto",
                height: { sx: "auto", md: "95%" },
                flexDirection: { md: "column" },
            }}
        >
            {categories.map((category) => (
                <button
                    className="category-btn"
                    onClick={() => setSelectedCategory(category.name)}
                    style={{
                        height: '35px',
                        margin: '5px 15px 5px 0px',
                        color: "white",
                        // The below line is to give the background as '#FC1503' if 'category.name' === 'selectedCategory' ,  '&&' represents "then".
                        background:
                            category.name === selectedCategory && "#FC1503",
                        }}
                        >
                    <span
                        style={{
                            fontSize: '14px',
                            marginRight: "15px",
                            color:
                                category.name === selectedCategory
                                    ? "white"
                                    : "red",
                        }}
                    >
                        {category.icon}
                    </span>

                    <span
                        style={{
                            fontSize: '14px',
                            opacity:
                                category.name === selectedCategory
                                    ? "1"
                                    : "0.8",
                        }}
                    >
                        {category.name}
                    </span>
                </button>
            ))}
        </Stack>
    );
}

export default Sidebar;
