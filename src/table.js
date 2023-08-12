import PropsForSorting from './props';

export default class Table {
  constructor(element, data) {
    this.tableElem = element;
    const propsForSorting = new PropsForSorting(data);
    this.props = propsForSorting.props;
    this.sortedIdx = 0;

    for (let i = 0; i < data.length; i++) {
      const tr = document.createElement('tr');
      tr.className = 'tr-regular';
      let tds = '';

      for (const prop in data[i]) {
        tr.dataset[prop] = data[i][prop];
        if (tr.dataset[prop] === 'imdb') {
          tds += `<td>imdb: ${data[i][prop].toFixed(2)}</td>`;
        } else if (tr.dataset[prop] === 'year') {
          tds += `<td>(${data[i][prop]})</td>`;
        } else {
          tds += `<td>${data[i][prop]}</td>`;
        }
      }
      tr.innerHTML = tds;
      element.insertBefore(tr, null);
    }
  }

  sort(field, asc) {
    const trs = Array.from(document.querySelectorAll('.tr-regular'));

    // sort for number field
    if (!Number.isNaN(Number(trs[0].dataset[field]))) {
      if (asc) {
        trs.sort((a, b) => a.dataset[field] - b.dataset[field]);
      } else {
        trs.sort((a, b) => b.dataset[field] - a.dataset[field]);
      }
    } else if (typeof trs[0].dataset[field] === 'string') {
      // sort for string field
      if (asc) {
        trs.sort((a, b) => {
          if (a.dataset[field] > b.dataset[field]) {
            return 1;
          }
          return -1;
        });
      } else {
        trs.sort((a, b) => {
          if (a.dataset[field] < b.dataset[field]) {
            return 1;
          }
          return -1;
        });
      }
    }

    let trsHTML = '<tr><th>id</th><th>title</th><th>year</th><th>imdb</th></tr>';
    for (let i = 0; i < trs.length; i++) {
      trsHTML += trs[i].outerHTML;
    }
    this.tableElem.innerHTML = trsHTML;
  }

  newSort() {
    this.sort(this.props[this.sortedIdx].value, this.props[this.sortedIdx].asc);
    if (this.sortedIdx < this.props.length - 1) {
      this.sortedIdx++;
    } else {
      this.sortedIdx = 0;
    }
  }
}
