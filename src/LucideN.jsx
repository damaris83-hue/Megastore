import {Pencil,Sparkles,Clock,Book,ThumbsUp,Headset,Heart} from "lucide-react";

function LucideN(){
    return(
<div style={{display: 'flex',gap:'20px',padding:'20px'}}>
    <Pencil size={32}/>
<Sparkles size={32}/>
<Clock size={32}/>
    <Book size={32}/>
    <ThumbsUp size={32}/>
    <Headset size={32}/>
    <Heart siz={32} color="red"/>
</div>
);
}
export default LucideN;