import { CHANGE_DATE_RANGE} from '../constants'

const defaultFilters = {
    dateRange: {
        from: null,
        to: null
    }
}

export default (filters = defaultFilters, action) => {
    const { type, payload } = action

    switch (type) {
      case CHANGE_DATE_RANGE:
//            return Object.assign({}, filters, { dateRange: payload.dateRange })
        return {...filters, dateRange: payload.dateRange}
    }

    return filters
}