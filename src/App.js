import "./App.css";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div>
      <Header text="Fake Twitter - React Test 2" />
      <div className="profileCardsContainer">
        <ProfileCard
          profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"
          user="@react237"
          post="i'm dumb"
        />
        <ProfileCard
          profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png"
          user="@twitter01"
          post="i'm dumb"
        />
        <ProfileCard
          profilePic="https://www.facebook.com/images/fb_icon_325x325.png"
          user="@facebook69"
          post="i'm dumb"
        />
        <ProfileCard
          profilePic="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          user="@linkedin420"
          post="i'm dumb"
        />
      </div>
    </div>
  );
}

export default App;
