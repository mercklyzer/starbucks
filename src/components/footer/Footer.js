import React, {useState, useEffect} from 'react'
import './footer.css'

// ROUTER
import {Link} from 'react-router-dom'

// COMPONENTS
import Accordion from '../accordion/Accordion.js'
import Icon from '../icon/Icon.js'

// ASSETS
import {ReactComponent as Facebook} from '../../images/footer/facebook-logo.svg'
import {ReactComponent as Spotify} from '../../images/footer/spotify-logo.svg'
import {ReactComponent as Instagram} from '../../images/footer/instagram-logo.svg'
import {ReactComponent as Pinterest} from '../../images/footer/pinterest-logo.svg'
import {ReactComponent as Youtube} from '../../images/footer/youtube-logo.svg'
import {ReactComponent as Twitter} from '../../images/footer/twitter-logo.svg'

const themes = ['light', 'dark']
const alignments = ['left', 'right', 'center', 'justify']


function Footer({theme, alignment, col1, col2, col3, col4, col5, col6}) {
    const ourAlignment = alignments.includes(alignment)? alignment: alignments[0]

    // COLUMN TITLES
    let col1Title, col2Title, col3Title, col4Title, col5Title, col6Title

    // COLUMN ITEMS
    let col1Items, col2Items, col3Items, col4Items, col5Items, col6Items

    // DESTRUCTURING COLUMNS
    if(col1)    [col1Title, col1Items] = [col1.title, col1.items]
    if(col2)    [col2Title, col2Items] = [col2.title, col2.items]
    if(col3)    [col3Title, col3Items] = [col3.title, col3.items]
    if(col4)    [col4Title, col4Items] = [col4.title, col4.items]
    if(col5)    [col5Title, col5Items] = [col5.title, col5.items]
    if(col6)    [col6Title, col6Items] = [col6.title, col6.items]
    
    let columns = [
        {
            exist: col1,
            title: col1Title,
            items: col1Items
        },
        {
            exist: col2,
            title: col2Title,
            items: col2Items
        },
        {
            exist: col3,
            title: col3Title,
            items: col3Items
        },
        {
            exist: col4,
            title: col4Title,
            items: col4Items
        },
        {
            exist: col5,
            title: col5Title,
            items: col5Items
        },
        {
            exist: col6,
            title: col6Title,
            items: col6Items
        },

    ]

    let accordionItems = []
    for(let i = 0; i < columns.length; i++){
        if(columns[i].exist){
            accordionItems = [...accordionItems, {header: columns[i].title, content: columns[i].items}]
        }
    }

    let [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    })

    useEffect(() => {
        function handleResize(){
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize) 
    }, [])

    return (
        <>
            {windowSize.width >= 768 && <div className={`footer-container ${ourAlignment}`}>
                {
                    columns.map((col, indexCol) => {
                        if(col.exist){
                            return(
                                <React.Fragment key={indexCol}>
                                    <div className='footer-col'>
                                        <div className='footer-col-title'>{col.title}</div>
                                        
                                        <div className='footer-col-items-container'>
                                            {col.items.map((item, indexItem) => {
                                                return (
                                                    <React.Fragment key={indexItem}>
                                                        <Link to={item.path} style={{ textDecoration: 'none' }}>
                                                            <div className={`footer-col-item`}>{item.title}</div>
                                                        </Link>
                                                    </React.Fragment>)
                                            })}
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        }
                    })
                }
            </div>}

            {windowSize.width < 768 && 
            <Accordion color ='green' 
                items = {
                    
                    accordionItems.map((col, indexCol) => {

                            let colDummy = col.content.map((item, indexItem) => {
                                return (
                                    <React.Fragment key={indexItem}>
                                        <Link to={item.path} style={{ textDecoration: 'none' }}>
                                            <div className='collapse-content'>{item.title}</div>
                                        </Link>
                                    </React.Fragment>)
                            })

                            return {header: col.header, content:colDummy}

                    })
                    }
            />}

            <div className='footer-break'></div>
            <div className='footer-icons'>
                <Icon><Facebook/></Icon>
                <Icon><Instagram/></Icon>
                <Icon><Spotify/></Icon>
                <Icon><Pinterest/></Icon>
                <Icon><Twitter/></Icon>
                <Icon><Youtube/></Icon>
            </div>
            <div className='footer-copyright'>
            © 2021 Starbucks Coffee Company. All rights reserved.
            </div> 
        </>
    )
}

export default Footer
