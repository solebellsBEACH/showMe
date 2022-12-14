import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText , CircularProgress} from "@mui/material";
import { blue } from "@mui/material/colors";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";

interface IRouterItemProps{
    index:number, 
    e:{name: string;
        path: string;
        icon: ReactElement<any, any>;}
    actualPage:string;
    loading:string | null
    setLoading: React.Dispatch<React.SetStateAction<string | null>>
}

const RouterItem = ({index,e, actualPage, loading, setLoading}:IRouterItemProps) => {
    const router = useRouter();
    return <div key={`listItem => ${index} + ${e.name}`}>
    <ListItem
      onClick={() => {
        setLoading(e.name)
        router.push(e.path);
      }}
    >
      <ListItemAvatar key={`listItemAvatar => ${index} + ${e.name}`}>
        {loading !== e.name || loading === null? <Avatar
          key={`avatar => ${index} + ${e.name}`}
          sx={e.name === actualPage ? { bgcolor: blue[500] } : {}}
        >
          {e.icon}
        </Avatar>:<CircularProgress/>}
        
      </ListItemAvatar>
      <ListItemText primary={e.name} secondary="" />
    </ListItem>
    <Divider
      key={`divider => ${index} + ${e.name}`}
      variant="inset"
      component="li"
    />
  </div>
}
 
export default RouterItem;