import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearSearchItems, searchItems } from "../store/actions/controlActions";
import { RootStore } from "../store/store";

const useDebouncedSearch = () => {
    const dispatch = useDispatch();
    const searchQuerry = useSelector((state: RootStore) => state.controls.search);
    const currentTab = useSelector(
        (state: RootStore) => state.controls.currentTab
    );

    useEffect((): any => {
        if (searchQuerry.length < 3) {
            return dispatch(clearSearchItems());
        } else {
            const timer = setTimeout(() => {
                dispatch(searchItems(currentTab, searchQuerry));
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [currentTab, dispatch, searchQuerry]);

}
export default useDebouncedSearch