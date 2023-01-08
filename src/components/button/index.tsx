/*
background: #EEF0F4;
border-radius: 28%;
box-shadow: 12.61px 12.61px 17px #C4C6C9, -12.61px -12.61px 17px #FFFFFF;
*/

export default function Button(
        {text, fontSize, width, height, onClick}: 
        {
            text: string,
            fontSize: string, 
            width: string, 
            height: string,
            onClick: () => void
        }){
    return <button
    className="
    font-neumorphic
    rounded-[15%]
    bg-neumorphic-flat
    shadow-neumorphic-outset
    active:shadow-neumorphic-inset
    "
    style={{width: width, height: height, fontSize: fontSize}}
    onClick={onClick}
    >{text}</button>
};