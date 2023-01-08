/*
background: #EEF0F4;
border-radius: 28%;
box-shadow: 12.61px 12.61px 17px #C4C6C9, -12.61px -12.61px 17px #FFFFFF;
*/

export default function InputField(
    {text, fontSize, width, height, }: 
    {
        text: string,
        fontSize: string, 
        width: string, 
        height: string
    }){
return <input
className="
font-neumorphic
rounded-[15%]
bg-neumorphic-concave
shadow-neumorphic-inset
text-gray-800
"
style={{width: width, height: height, fontSize: fontSize}}
value={text}
/>
};