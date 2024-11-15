import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { baseURL } from '@/utility/api'



const UserAvatar = ({image}) => {
  const handleSignOut = () => {
    window.open(`${baseURL}/logout`,"_self")
  }
  
  return (
    <DropdownMenu >
  <DropdownMenuTrigger>
  <Avatar>
    <AvatarImage src={image} />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent className = "md:mt-5">
  <DropdownMenuLabel>My Account</DropdownMenuLabel>
  <DropdownMenuSeparator />
    <DropdownMenuItem onClick = {handleSignOut}>Log Out</DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>

    
  
  )
}

export default UserAvatar