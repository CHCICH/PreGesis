import React from 'react'
import { useEffect,useState } from 'react';

const UpperFilter = ({color_mode, screenSize}) =>{
    let [style_mode ,setStyle_mode] = useState({mode1:{},mode2:{},mode3:{}});
    useEffect(()=>{
        if(color_mode == "light"){
            setStyle_mode({
                mode1: {},
                mode2: {},
                mode3: {}
            });
        }else{
            setStyle_mode({mode1:{backgroundColor:"black",color:"white"},mode2:{backgroundColor:"white",color:"#1E1E1E"},mode3:{color:"white"}});
        }
    },[color_mode])
    let [changed_color,set_changed_color] = useState(true);
    useEffect(()=>{
        let sorted_buttons = [...filter_button].sort((a, b) => {
            if (a.clicked && !b.clicked) return -1;
            if (!a.clicked && b.clicked) return 1;
            if (a.clicked === b.clicked) return a.id - b.id;
            return 0;
        });
        set_filter_button(sorted_buttons);
    },[changed_color])
    let [filter_button,set_filter_button] = useState([ {text:"New",id:1, clicked:false, },{id:2,text:"Generation" , clicked:false, },{id:3,text:"Recommended" , clicked:false, },{id:4,text:"Difficulty" , clicked:false, }  ]);
    return(
        <div className='margin-top' style={{display:"flex", justifyContent:"",flexDirection: screenSize < 900 ? "column" :"row"}}>
            <div style={{display: "flex", alignItems: "center", padding: "10px"}}>
                <input 
                    type="text" 
                    placeholder="Search your library" 
                    style={{
                        width: "300px",
                        padding: "8px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "14px",
                        ...style_mode.mode2
                    }}
                />
                <button 
                    style={{
                        marginLeft: "10px",
                        padding: "8px 16px",
                        border: "solid white 1px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        ...style_mode.mode1
                    }}
                >
                    Search
                </button>
            </div>
            <div style={{marginLeft:"2vw"}}>
                {
                    filter_button.map(item => <Clickable_component key={item.id} screenSize={screenSize} color_mode={color_mode} text={item.text} clicked={item.clicked} filter_button={filter_button} set_filter_button={set_filter_button} set_changed_color={set_changed_color} changed_color={changed_color} />)
                }
            </div>
        </div>
    )
}


// other components
const Clickable_component = ({screenSize, color_mode,text,clicked , filter_button, set_filter_button,set_changed_color,changed_color}) =>{
    let [style_mode ,setStyle_mode] = useState({mode1:{},mode2:{},mode3:{}});
    useEffect(()=>{
        if(color_mode == "light"){
            setStyle_mode({
                mode1: {backgroundColor:"light-grey",color:"black"},
                mode2: {},
                mode3: {}
            });
        }else{
            setStyle_mode({mode1:{backgroundColor:"light-grey",color:"black"},mode2:{backgroundColor:"white",color:"#1E1E1E"},mode3:{color:"white"}});
        }
    },[color_mode])
    return(
        <button 
            style={{
                padding: "8px 16px",
                border: "solid white 1px",
                borderRadius: "8px",
                cursor: "pointer",
                height:"35px",
                marginTop: screenSize < 900 ? "30px": "10px",
                marginRight:"5px",
                transition:"1s all",
                ...style_mode.mode1,
                backgroundColor: clicked ? "grey" : ""
            }}
            onClick={()=>{
                let temp = filter_button.map(item =>{
                    if(item.text == text){
                        item.clicked = !item.clicked
                    }
                    return item
                } )
                set_filter_button(temp);
                set_changed_color(!changed_color);
            }}
        >
           {text}
        </button>
    )
}

export default UpperFilter