import React, {useState} from 'react';
import clsx from 'clsx';
import {
  useCurrentSidebarCategory,
  filterDocCardListItems,
} from '@docusaurus/theme-common';
import DocCard from '@theme/DocCard';
import styles from './style.module.css'

function DocCardListForCurrentSidebarCategory({className}) {
  const category = useCurrentSidebarCategory();
  return category.label === 'Tutorials'
    ? <FilterableDocCardList items={category.items} className={className} />
    : category.label === 'How-To Guides'
    ? <GuidesDocList items={category.items} className={className} />
    : <DocCardList items={category.items} className={className} />;
}

function GuidesDocList(props) {
  const {items, className} = props;

  // return (
  //   <section className={clsx('row', className)}>
  //     {items.map((item, index) => {
  //       if (item.type === 'category') {
  //         return (
  //           <h2>{item.label}</h2>
  //         )
  //       }}
  //     )}
  //   </section>
  // );
  return (
    <div className={clsx('row', className)}>
      {items.map((item, index) => {
        if (item.type === 'category') {
          return (
            <section className={clsx('col', 'col--6', 'margin-bottom--lg', className)}>
              <h2>{item.label}</h2>
              {item.items.map((item, index) =>
                <p className='margin-bottom--sm'><a href={item.href}>{item.label}</a></p>
              )}
            </section>
          )
        }
      })}
    </div>
  )
}

function FilterableDocCardList(props) {
  const [tutorialLevel, setTutorialLevel] = useState('All')

  const {items, className} = props;
  const filteredItems = filterDocCardListItems(items);
  const filterDocCardsByTutorialLevel = (level) => {
    return filteredItems.filter(item => level.toLowerCase() === 'all' ? true : item.customProps?.tutorial?.level === level.toLowerCase())
  }
  let filteredDocCards = filterDocCardsByTutorialLevel(tutorialLevel)

  return (
    <>
      <label>Select Tutorial Level</label>
      <select className={styles.docCardFilterSelect} onChange={e => setTutorialLevel(e.target.value)}>
        <option default>All</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      <section className={clsx('row', className)}>
        {filteredDocCards.map((item, index) =>
          <article key={index} className="col col--12 margin-bottom--lg">
            <DocCard item={item} />
          </article>
        )}
      </section>
    </>
  )
}

export default function DocCardList(props) {
  const {items, className} = props;
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const filteredItems = filterDocCardListItems(items);
  return (
    <section className={clsx('row', className)}>
      {filteredItems.map((item, index) =>
        <article key={index} className="col col--6 margin-bottom--lg">
          <DocCard item={item} />
        </article>
      )}
    </section>
  );
}