import React, { useState, useEffect } from 'react';
import './MyPageTop.scss';
import '../../modal.css';
import MediaQuery from 'react-responsive';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';
import Modal from '@material-ui/core/Modal';
import { v4 as uuid } from 'uuid';
import { usePhotosContext } from '../../context/PhotosProvider';
import AppsIcon from '@material-ui/icons/Apps';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const readFile = (file) => {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  })
}

const USER_NAME = "user";

const MyPageTop = ({ usersPhoto, dispatchUsersPhoto }) => {
  const { dispatch } = usePhotosContext();
  const [photoURL, setPhotoURL] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }

  const onPhotoChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const photoDataUrl = await readFile(file);
      setPhotoURL(photoDataUrl);
      e.target.value = "";
    }
  }

  const onPostPhoto = () => {
    const photoObj = {
      src: {
        medium: photoURL,
        large: photoURL
      },
      id: uuid(),
      photographer: USER_NAME,
      like: {
        isLiked: false,
        numOfLikes: 0
      },
      comments: []
    };
    dispatch({
      type: "ADD_PHOTO",
      payload: photoObj
    });
    dispatchUsersPhoto({
      type: 'ADD_USERS_PHOTOS',
      payload: photoObj
    })
    handleClose();
    setPhotoURL('');
  };

  useEffect(() => {
    usersPhoto.length !== 0 && localStorage.setItem(USER_NAME, JSON.stringify(usersPhoto));
  }, [usersPhoto]);

  return (
    <div className="my-page-top">
      <MediaQuery query="(max-width: 480px)">
        <div className="userID-container">
          <div className="userID-wrapper">
            <div className="userID">
              <span className="userID-span">UserName</span>
              <KeyboardArrowDownIcon />
            </div>
          </div>
          <AppsIcon onClick={handleOpen} style={{ fontSize: 40 }} />
        </div>
        <div className="user-info-wrapper">
          <div className="icon-wrapper">
            <div className="icon">
              <AccountCircleIcon style={{ fontSize: 100 }}/>
            </div>
          </div>
          <div className="user-info">
            <ul className="info-counter">
              <li><span className="info-counter-span">{usersPhoto.length} {usersPhoto.length === 1 ? "post" : "posts"}</span></li>
              <li><span>200 followers</span></li>
              <li><span>230 following</span></li>
            </ul>
          </div>
        </div>
        <div className="user-bio">
          <div>Hello, world!</div>
        </div>
        <Button variant="outlined" className="edit-profile">Edit Profile</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="post-modal-title"
          aria-describedby="post-modal-description"
        >
          <div className="modal">
            <div className="post-modal-title-wrapper">
              <h2 id="post-modal-title">New Post</h2>
            </div>
            { photoURL ? (
              <>
                <div className="posted-img-wrapper">
                  <img src={photoURL} alt="posted-img" className="posted-img"></img>
                </div>
                <div className="posting-area-buttom">
                  <Button component="label" variant="contained" color="primary">
                    Select a photo
                    <input 
                      type="file"
                      onChange={e => onPhotoChange(e)}
                      accept="image/*"
                      hidden
                    />
                  </Button> 
                </div>
              </>
            ) : (
              <div className="posting-area">
                {/* Make this component later */}
                <Button component="label" variant="contained" color="primary">
                  Select a photo
                  <input 
                    type="file"
                    onChange={e => onPhotoChange(e)}
                    accept="image/*"
                    hidden
                  />
                </Button>
              </div>
            )}
            <div className="post-button">
              <Button
                variant="contained"
                color="primary"
                onClick={onPostPhoto}
              >
                Post
              </Button>
            </div>
          </div>
        </Modal>
      </MediaQuery>
      <MediaQuery query="(min-width: 481px)">
        <div className="user-info-wrapper">
          <div className="icon-wrapper">
            <div className="icon">
              <AccountCircleIcon style={{ fontSize: 150 }}/>
            </div>
          </div>
          <div className="user-info">
            <div className="user-info-first">
              <span className="user-name">UserName</span>
              <div className="margin-left-middle">
                <Button variant="outlined">Edit Profile</Button>
              </div>
              <div className="setting-icon margin-left-short">
                <SettingsIcon />
              </div>
            </div>
            <ul className="info-counter">
              <li><span>{usersPhoto.length} {usersPhoto.length === 1 ? "post" : "posts"}</span></li>
              <li><span>200 followers</span></li>
              <li><span>230 following</span></li>
            </ul>
            <div>
              <p>Hello, world!</p>
            </div>
          </div>
        </div>
        <div className="post-button">
          <Button onClick={handleOpen} variant="contained" color="primary">
            Post
          </Button>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="post-modal-title"
          aria-describedby="post-modal-description"
        >
          <div className="modal">
            <div className="post-modal-title-wrapper">
              <h2 id="post-modal-title">New Post</h2>
            </div>
            { photoURL ? (
              <>
                <div className="posted-img-wrapper">
                  <img src={photoURL} alt="posted-img" className="posted-img"></img>
                </div>
                <div className="posting-area-buttom">
                  <Button component="label" variant="contained" color="primary">
                    Select a photo
                    <input 
                      type="file"
                      onChange={e => onPhotoChange(e)}
                      accept="image/*"
                      hidden
                    />
                  </Button> 
                </div>
              </>
            ) : (
              <div className="posting-area">
                {/* Make this component later */}
                <Button component="label" variant="contained" color="primary">
                  Select a photo
                  <input 
                    type="file"
                    onChange={e => onPhotoChange(e)}
                    accept="image/*"
                    hidden
                  />
                </Button>
              </div>
            )}
            <div className="post-button">
              <Button
                variant="contained"
                color="primary"
                onClick={onPostPhoto}
              >
                Post
              </Button>
            </div>
          </div>
        </Modal>
      </MediaQuery>
    </div>
  )
};

export default MyPageTop;