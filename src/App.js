import "./App.css";
import Person from "./component/person";
import Main from "./component/main";
import { useEffect, useState } from "react";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";

function App() {
    const [people, setPeople] = useState([]);
    const [count, setCount] = useState(6);
    useEffect(() => {
        const url = `https://randomuser.me/api/?results=${count}`;
        const fetchPeople = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setPeople(data.results);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchPeople();
    }, [count]);
    const peopleList = people.map((per, i) => {
        return (
            <Person key={i}>
                <Person.Image src={per.picture.medium} alt={per.name.first} />
                <Person.Wrapper>
                    <Person.Title>{` ${per.name.first} ${per.name.last}`}</Person.Title>
                    <Person.SubTitle>{`${per.location.city}, ${per.location.state}, ${per.location.country}`}</Person.SubTitle>
                    <Person.LinkWrapper>
                        <MailOutlineOutlinedIcon />
                        <Person.Link>Email</Person.Link>
                        <PhoneAndroidOutlinedIcon />
                        <Person.Link>Phone</Person.Link>
                    </Person.LinkWrapper>
                </Person.Wrapper>
            </Person>
        );
    });
    return (
        <Main>
            <Main.Header>Our Staff</Main.Header>
            <Main.PersonWrapper>{peopleList}</Main.PersonWrapper>
            <Main.Button onClick={() => setCount(10)}>View everyone</Main.Button>
        </Main>
    );
}

export default App;
