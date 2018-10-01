// Autogenerated using npm run gen Groups
/*
* Copy to other files
* import Groups from './Groups';
* <Groups/>
*/
import styled from 'styled-components';
import ChatList from './ChatList';
import Group from './Group';

//Right side should contain list of groups to select from
//Details Groups name and a Public/Private descriptdor

function Groups(){
  return (
    <Main>
      <Title>Group [current group selected]</Title>
      <div className="row">
        <div className="col-md-3">
          {groupList.map((group) =>
            <Group
              groupName={group.groupName}
              id={group.id}
              key={group.id}/>
          )}
        </div>
        <div className="col-md-9"><ChatList/></div>
      </div>
    </Main>
  );
}

export default Groups;

const Main = styled.div`
background-color: black;
font-family: sans-serif;
color: white;
`;

const Title = styled.h1`
text-align: center;
`;

const groupOne = { groupName:'sudo masters', id:'0' };
const groupTwo = { groupName:'react help group', id:'1' };

const groupList = [groupOne,groupTwo];
