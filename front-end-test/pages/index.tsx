import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import { usePokeInfoQuery } from "../hooks/usePokeInfoQuery";
import { usePokeListQuery } from "../hooks/usePokeListFetchQuery";
import { withLayout } from "../layouts";

const Home = () => {
    const [fetchData, { data, error, loading, status }] = usePokeListQuery();
    const [fetchPokeInfo, { data: pokeInfo, loading: PokeInfoLoading }] =
        usePokeInfoQuery();

    const [list, setList] = useState<{ name: string[] } | any>([]);
    const [count, setCount] = useState(25);
    const [show, setShow] = useState(false);

    useEffect(() => {
        fetchData({ limit: 25, offset: 0 });
    }, []);

    useEffect(() => {
        if (data) {
            setList([...list, ...data]);
        }
    }, [data]);

    const handlePokeInfo = (name: string) => {
        fetchPokeInfo({ name });
        setShow(true);
    };

    console.log(pokeInfo);

    return (
        <React.Fragment>
            <div className="page_warpper">
                {list &&
                    list.map((items, index) => (
                        <div
                            className="card"
                            key={index}
                            onClick={() => handlePokeInfo(items.name)}
                        >
                            {items.name}
                        </div>
                    ))}
            </div>
            <div className="btn_container">
                <button
                    className="btn"
                    onClick={() => {
                        setCount(prev => prev + 25);
                        fetchData({ limit: 25, offset: count });
                    }}
                >
                    load more
                </button>
            </div>

            {/* modal */}
            <Modal show={show} clickOutsideClose onClose={() => setShow(false)}>
                {pokeInfo && (
                    <div className="modal_content">
                        <div className="modal_text"> name : {pokeInfo?.name} </div>
                        <div className="modal_text"> height : {pokeInfo.height} </div>
                        <div className="modal_text"> weight : {pokeInfo.weight} </div>
                        <div className="modal_text">
                            {" "}
                            base experience : {pokeInfo.base_experience}{" "}
                        </div>
                        <div className="modal_text">
                            {" "}
                            moves :{" "}
                            {pokeInfo.moves
                                .slice(0, 10)
                                .map(m => m.move.name)
                                .join(" / ")}
                            ...
                        </div>
                    </div>
                )}
            </Modal>
        </React.Fragment>
    );
};

export default withLayout(Home);
