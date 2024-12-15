"use client";
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, ArrowDown, Twitter} from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import MessageForm from "@/app/components/messageForm";
import { useEffect, useRef } from "react";


export default function Home() {
  return (
    <div>

      <h1 className="text-white ">My tech stack</h1>
            <p className='text-white'> I constantly try to improve</p>
    </div>
  );
}
