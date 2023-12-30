using {Northwind} from './external/Northwind';

service znorthwindsrv {
    entity Products as
        projection on Northwind.Products {
            ProductID,
            ProductName,
            UnitPrice
        };
}
