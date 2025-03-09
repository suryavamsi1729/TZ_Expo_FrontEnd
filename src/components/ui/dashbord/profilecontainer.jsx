import React from "react";
import { cn } from "../../../lib/utils";
import Container from "../container";
import kesavaimg from "../../../assets/kesava.jpeg";
import { Mail, MapPin } from "lucide-react";

const ProfileConatiner = ({ children, className }) => {
    return (
        <Container id="profileConatiner" className={`w-full h-full flex flex-row justify-start items-center px-4 py-4 mx-0`}>
            <img src={kesavaimg} className="w-[72px] h-[72px] rounded-lg object-cover"/>
            <div className="w-full h-full flex flex-col justify-center lg:justify-between items-start px-4 py-1 gap-2 ">
                <h1 className="text-base lg:text-xl font-bold text-zinc-900">Kesava</h1>
                <div className="w-full h-auto flex flex-col lg:flex-row justify-start items-start gap-1 lg:gap-4">
                    <div className="w-auto h-auto flex flex-row justify-start items-center gap-2 ">
                        <Mail className="w-4! h-4! text-zinc-800/80"/>
                        <p className="text-xs lg:text-sm font-medium text-zinc-800/80">DKR@gmail.com</p>
                    </div>
                    <div className="w-auto h-auto flex flex-row justify-start items-center gap-2">
                        <MapPin className="w-4! h-4! text-zinc-800/80"/>
                        <p className="text-xs lg:text-sm font-medium text-zinc-800/80">Visakhapatanam</p>
                    </div>
                </div>
            </div>
        </Container>
    );
}
export default ProfileConatiner;
