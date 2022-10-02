import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import { AiFillHome, AiOutlineMail } from 'react-icons/ai'
import { BsHash, BsBookmark, BsPerson } from 'react-icons/bs'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { RiFileList2Line } from 'react-icons/ri'
import { CgMoreO } from 'react-icons/cg'

let tweets = [{name: 'Sam Larew', tweet: 'Roddy rich fell off', likes : 802}, {name: 'Modern Warzone', tweet: 'Twitch streamer blablabla', likes : 802}, {name: 'FaZe Jsmooth', tweet: 'Clout be wilding', likes : 123}]
let navItems = ['Home', 'Explore', 'Notifications', 'Messages', 'Messages', 'Bookmarks', 'Lists', 'Profile', 'More']


function App() {
  return (
    <div className="App">
      <div className='collumnWrapper'>
        <div className='leftCol'>
        
          <Nav defaultActiveKey="/home" className="flex-column">
            <Container>
              <div className='logo'></div>
              <div className='navWrap' style={{width: navItems[0].length * 30 +'px'}}><Nav.Item className='navElem'><span className='navIcons homeIcon'><AiFillHome size='1.2em'></AiFillHome></span> <span className='navWords'>Home</span></Nav.Item></div>
              <div className='navWrap' style={{width: navItems[1].length * 19 +'px'}}><Nav.Item className='navElem'><span className='navIcons'><BsHash size='1.2em'></BsHash></span><span className='navWords'>Explore</span></Nav.Item></div>
              <div className='navWrap' style={{width: navItems[2].length * 14 +'px'}}><Nav.Item className='navElem'><span className='navIcons'><MdOutlineNotificationsNone size='1.2em'></MdOutlineNotificationsNone></span><span className='navWords'>Notifications</span></Nav.Item></div>
              <div className='navWrap' style={{width: navItems[3].length * 19 +'px'}}><Nav.Item className='navElem'><span className='navIcons'><AiOutlineMail size='1.2em'></AiOutlineMail></span><span className='navWords'>Messages</span></Nav.Item></div>
              <div className='navWrap' style={{width: navItems[4].length * 20 +'px'}}><Nav.Item className='navElem'><span className='navIcons'><BsBookmark size='1.2em'></BsBookmark></span><span className='navWords'>Bookmarks</span></Nav.Item></div>
              <div className='navWrap' style={{width: navItems[5].length * 11 +'px'}}><Nav.Item className='navElem'><span className='navIcons'><RiFileList2Line size='1.2em'></RiFileList2Line></span><span className='navWords'>Lists</span></Nav.Item></div>
              <div className='navWrap' style={{width: navItems[6].length * 24 +'px'}}><Nav.Item className='navElem'><span className='navIcons'><BsPerson size='1.2em'></BsPerson></span><span className='navWords'>Profile</span></Nav.Item></div>
              <div className='navWrap' style={{width: navItems[7].length * 16 +'px'}}> <Nav.Item className='navElem'><span className='navIcons'><CgMoreO size='1.2em'></CgMoreO></span><span className='navWords'>More</span></Nav.Item></div>
              <div className='navWrap'><Nav.Item className='tweetBtn'> <Button variant="info">Tweet</Button>{' '}</Nav.Item></div>
            </Container>
          </Nav>
        </div>
        
        <div className='midCol'>
          <div className='home'><h3>Home</h3></div>
          <div className='newTweet'>
            <Form>
              <Form.Group>
                <div className='tweetBoxDiv'><Form.Control type="email" placeholder="What's happening?" /></div>
                <div className='attachmentsPollsExtra'><Button variant="info">Tweet</Button>{' '}</div>
              </Form.Group>
            </Form>
          
          </div>
          <div className='tweets'>{tweets.map((tweet, index) => {
            return (
              <div className='bigTweet' key={index}><div className='tweetName tweet'><strong>{tweet.name}</strong></div> <div className='tweetContent tweet'>{tweet.tweet}</div><div className='tweetLikes tweet'>{tweet.likes}</div></div>
            )
          })}</div>
        </div>
        <div className='rightCol'>
          <div className='searchBar'></div>
          <div className='relevantPeople'></div>
          <div className='whatsHappening'>Whats Happening</div>
          <div className='greyLinks'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
