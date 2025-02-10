'use client'
import RichText from '@/components/RichText'
import { TechnicalGuideType } from './config'
import styles from './index.module.scss'
import React, { useEffect, useState } from 'react'

export const TechnicalGuideComponent: React.FC<TechnicalGuideType> = (props) => {
  const { mainTitle } = props
  const { smallTitle } = props
  const { description } = props
  const { scrollerId } = props
  const { theme } = props
  const { BoxData } = props
  const [activeId, setActiveId] = useState<any>('nav1')
  const [loadRichText, setLoadRichText] = useState<any>(false)
  const handleScroll = (id: string) => {
    setActiveId(id)
    const target = document.getElementById(id)
    if (target) {
      const yOffset = -100
      const y = target.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadRichText(true)
    })
    return () => clearTimeout(timeout)
  }, [props])

  return (
    <React.Fragment>
      <section className={`${styles.tech_stack_block}`}>
        <section
          className={`${styles.support_technical_guide_section} hire_sec_pad_m
              ${theme === 'dark' ? styles.bg_dark : ''}`}
          id={scrollerId}
        >
          {console.log('theme', theme)}
          <div className="container">
            <div className={styles.technical_guid_wrapper}>
              <div className={styles.technical_guid_left}>
                <div className={styles.technical_guid_left_wrapper}>
                  <div className={styles.support_title}>
                    <p className={styles.support_title_upper}>{smallTitle}</p>
                    <p className={styles.support_title_text}>{mainTitle}</p>
                  </div>
                  <div className={styles.support_nav_body}>
                    <div className={styles.support_nav_wrapper}>
                      <ul className={styles.support_nav_ul}>
                        {BoxData.map((item, index) => (
                          <li
                            key={index}
                            className={
                              activeId === `nav${index + 1}`
                                ? `${styles.support_nav_li} ${styles.active}`
                                : `${styles.support_nav_li}`
                            }
                          >
                            <button
                              title={item.title}
                              key={`nav${index + 1}`}
                              onClick={() => handleScroll(`nav${index + 1}`)}
                              className={styles.nav_link}
                            >
                              {item.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.technical_guid_right}>
                <div className={styles.technical_guid_right_wrapper}>
                  {BoxData.map((item, index) => (
                    <div
                      key={index}
                      id={`nav${index + 1}`}
                      className={styles.technical_guid_qanda_wrapper}
                    >
                      <div className={styles.technical_quid_que}>
                        <h2>{item.title}</h2>
                      </div>
                      <div className={styles.technical_quid_ans}>
                        <RichText data={item.description} theme={theme} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>{' '}
      </section>
    </React.Fragment>
  )
}
