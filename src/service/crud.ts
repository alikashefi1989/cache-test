import { AxiosInstance, AxiosResponse } from "axios"
import useBaseService from "./base"

const useCrudService = <EntityModel, EntityCreateModel, EntityUpdateModel>() => {
    const baseService: AxiosInstance = useBaseService();

    const create = (apiUri: string, data: EntityCreateModel): Promise<AxiosResponse<EntityModel>> => {
        return baseService.post(`${apiUri}`, data);
    };

    const get = (apiUri: string): Promise<AxiosResponse<EntityModel>> => {
        return baseService.get(`${apiUri}`);
    };

    const update = (apiUri: string, data: EntityUpdateModel): Promise<AxiosResponse<EntityModel>> => {
        return baseService.put(`${apiUri}`, data);
    };

    const getAll = (apiUri: string): Promise<AxiosResponse<Array<EntityModel>>> => {
        return baseService.get(`${apiUri}`);
    };

    const remove = (apiUri: string): Promise<AxiosResponse<unknown>> => {
        return baseService.delete(`${apiUri}`);
    };

    return { create, update, get, getAll, remove, baseService };
}

export default useCrudService;