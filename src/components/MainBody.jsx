import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import PreviewIcon from '@mui/icons-material/Preview';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
const MainBody = () => {
    return (
        <div className='main font-sans flex flex-col justify-center p-6 py-8 m-6 bg-pink-400 min-w-fit absolute top-14 right-20 rounded-2xl gap-5'>
            <div className="header flex flex-row gap-3 p-2 py-2 items-center">
                <div className="head flex flex-row gap-2">
                    <Avatar
                        className='avatar flex justify-center'
                        alt="Remy Sharp"
                        src="https://media.licdn.com/dms/image/D4D03AQHpkafflojIfA/profile-displayphoto-shrink_800_800/0/1664972403948?e=2147483647&v=beta&t=iYj177k5YP4x_eO5tarB_In33wZpN3_zokj_LtRD-Zg"
                        sx={{ width: 30, height: 30 }}
                    />
                    {/* <img className="profile_img w-[50px] h-[44x] bg-yellow-500 rounded-xl" src="" alt="" /> */}
                    <div className="nameDetail flex flex-col justify-start">
                        <p className="name text-[12px] font-bold ">SHIVAM GOVIND RAO</p>
                        <p className="email text-[10px] flex justify-start">shivamgrao9161@gmail.com</p>
                    </div>
                </div>
                <div className="ions flex flex-row gap-1 items-center justify-center">
                    {/* <img className="logo w-2 h-2 bg-red-600 rounded-xl" src="" alt="" /> */}
                    <div className="preview p-1 text-xl font-extrabold cursor-pointer">
                        <PreviewIcon className=" preview-icon texl-8xl" />
                    </div>
                    <div className="notification text-xl  p-1 cursor-pointer">
                        <NotificationsActiveIcon />
                    </div>
                    <div className="settings p-1 text-xl cursor-pointer">
                        <SettingsIcon />
                    </div>
                    <div className="close p-1 text-xl font-extrabold cursor-pointer">
                        <LogoutIcon />
                    </div>
                </div>
            </div>
            <div className="mainicons px-3">
                <div className="iconbox flex flex-row justify-around p-2 border-2 border-yellow-200 rounded-xl">
                    <div className="recorder cursor-pointer px-6 py-1">
                        <VideoCameraBackOutlinedIcon />
                    </div>
                    <div className="camera cursor-pointer px-6 py-1">
                        <CameraAltOutlinedIcon />
                    </div>
                    <div className="download cursor-pointer px-6 py-1">
                        <DownloadOutlinedIcon />
                    </div>
                </div>
            </div>
            <div className="recordingtype flex flex-col">
                <form className='form flex flex-col gap-2'>
                    <label className='label flex justify-start'> Recording Type </label>
                    <select className='select p-1 rounded-lg'>
                        <option value="AUDIO"> AUDIO
                        </option>
                        <option value="VIDEO"> VIDEO
                        </option>
                        <option value="AUDIO & VIDEO"> AUDIO & VIDEO
                        </option>
                        <option value="AUDIO & SCREEN-VIDEO"> AUDIO & SCREEN-VIDEO
                        </option>
                    </select>
                </form>
            </div>
            <div className="microphone flex flex-col">
                <form className='form flex flex-col gap-2'>
                    <label className='label flex justify-start'> MICROPHONE </label>
                    <select className='select p-1 rounded-lg'>
                        <option value="AUDIO"> AUDIO
                        </option>
                        <option value="VIDEO"> VIDEO
                        </option>
                    </select>
                </form>
            </div>
            <div className="camera flex flex-col">
                <form className='form flex flex-col gap-2'>
                    <label className='label flex justify-start'> CAMERA </label>
                    <select className='select p-1 rounded-lg'>
                        <option value="AUDIO p-2"> AUDIO
                        </option>
                        <option value="VIDEO p-2"> VIDEO
                        </option>
                    </select>
                </form>
            </div>

            <div className="recording">
                <button className='recording-btn bg-blue-700 w-full p-2 rounded-xl font-bold text-white font-sans'>
                    START RECORDING
                </button>
            </div>
            <div className="body">

            </div>
        </div>

    )
}

export default MainBody
