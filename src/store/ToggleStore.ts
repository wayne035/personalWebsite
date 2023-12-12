'use clinet'
import { create } from "zustand";
//SkillToggle===========================================
interface SkillToggle{
  skill: boolean,
  setSkillToggle:()=> void
}

export const useSkillToggle = create<SkillToggle>()((set)=>({
    skill: false,
    setSkillToggle: ()=> set((s)=> ({skill : !s.skill}))
}))
//PortfolioToggle===========================================
interface PortfolioToggle{
  portfolio: boolean,
  setPortfolioToggle:()=> void
}

export const usePortfolioToggle = create<PortfolioToggle>()((set)=>({
    portfolio:false,
    setPortfolioToggle: ()=> set((s)=> ({portfolio : !s.portfolio}))
}))